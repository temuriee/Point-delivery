# Pikri Big Project Readiness Guide

This document describes what should be fixed, decided, and automated before
Pikri grows into a large production project.

The current monorepo is a good foundation. It already has:

- pnpm workspaces
- Turborepo task orchestration
- separate deployable `web` and `api` applications
- shared API contracts, UI components, ESLint config, and TypeScript config
- working builds and type checks
- ignored generated build artifacts

The repository is suitable for starting a large project after completing the
mandatory tasks in Phase 0.

## Current Structure

```text
pikri/
├── apps/
│   ├── api/                    # NestJS backend
│   └── web/                    # Next.js frontend
├── packages/
│   ├── api-types/              # Shared schemas and API contracts
│   ├── eslint-config/          # Shared ESLint configurations
│   ├── typescript-config/      # Shared TypeScript configurations
│   └── ui/                     # Shared React UI components
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── turbo.json
```

This is the correct high-level Turborepo structure:

- `apps/` contains independently deployable applications.
- `packages/` contains reusable libraries and shared configuration.
- Internal dependencies use `workspace:*`.
- The root package should contain orchestration tools, not application
  dependencies.

## Readiness Status

| Area | Status | Required Action |
| --- | --- | --- |
| Workspace structure | Good | Keep current structure |
| Build pipeline | Good | Improve task-specific outputs and environment hashing |
| Type checking | Good | Standardize TypeScript versions |
| Linting | Blocked | Fix current warnings and remove `--fix` from CI lint |
| Testing | Incomplete | Add frontend, contract, and end-to-end test strategy |
| CI | Missing | Add required pull-request checks |
| Environment variables | Incomplete | Define validation and Turbo hashing rules |
| Deployment | Missing | Define independent web/API deployment |
| Architecture rules | Missing | Document package and domain boundaries |
| Operations | Missing | Add logging, health checks, monitoring, and migrations |

## Phase 0: Mandatory Before Feature Development

Complete these tasks before building major product features.

### 1. Fix the Repository-Wide Lint Command

The current root lint command fails because `BACKEND_URL` is used by the web
application but is not declared in Turbo's task configuration.

Add environment variables that affect task output to the relevant Turbo task:

```jsonc
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["$TURBO_DEFAULT$", ".env*"],
      "env": ["BACKEND_URL"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "lint": {
      "dependsOn": ["^lint"],
      "env": ["BACKEND_URL"]
    }
  }
}
```

Only declare variables that can affect a task. As the project grows, prefer
package-specific task configuration when an environment variable belongs to a
single application:

```jsonc
{
  "tasks": {
    "web#build": {
      "env": ["BACKEND_URL", "NEXT_PUBLIC_APP_URL"]
    }
  }
}
```

Then fix all lint warnings so this command passes:

```sh
pnpm lint
```

### 2. Make Lint Read-Only

The API lint script currently runs ESLint with `--fix`. A verification task
must not modify source files, especially in CI or through Turbo caching.

Use separate verification and formatting scripts:

```jsonc
{
  "scripts": {
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --max-warnings 0",
    "lint:fix": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix"
  }
}
```

Rules:

- `pnpm lint` only checks files.
- `pnpm lint:fix` explicitly changes files.
- CI only runs `pnpm lint`.
- Warnings should fail CI by using `--max-warnings 0`.

### 3. Set a Correct Node.js Version

The root currently allows Node.js 18, while the installed Next.js version
requires Node.js 20.9 or newer.

Choose one supported Node.js LTS version for developers, CI, and production.
For example:

```jsonc
{
  "engines": {
    "node": ">=22.0.0"
  },
  "packageManager": "pnpm@9.0.0"
}
```

Also add one version-manager file:

```text
.nvmrc
```

```text
22
```

Alternatively, use `.node-version` or Volta. Do not maintain conflicting
version files.

### 4. Update the Next.js Configuration

The current Next.js build reports that `experimental.typedRoutes` has moved.
Move it to the top-level configuration:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  transpilePackages: ["@pikri/api-types"],
};

export default nextConfig;
```

After changing framework configuration, verify:

```sh
pnpm build
pnpm check-types
```

### 5. Add Continuous Integration

Every pull request must run the same quality checks developers run locally.
Add `.github/workflows/ci.yml` with:

- frozen dependency installation
- lint
- type checks
- tests
- production builds
- affected-package execution where appropriate
- dependency and Turbo caching

Recommended CI commands:

```sh
pnpm install --frozen-lockfile
pnpm turbo run lint check-types test build --affected
```

On the default branch, run the complete task graph instead of only affected
packages:

```sh
pnpm lint
pnpm check-types
pnpm test
pnpm build
```

Protect the default branch and require CI checks before merging.

### 6. Define Environment Variable Rules

Create committed example files without secrets:

```text
apps/web/.env.example
apps/api/.env.example
```

Each example should document:

- variable name
- whether it is required
- safe example value
- which app reads it
- whether it is public or server-only

Validate environment variables when each application starts. Do not allow a
missing production secret to fail only after receiving user traffic.

Recommended ownership:

- web-only variables belong to `apps/web`
- API-only variables belong to `apps/api`
- shared variable schemas may live in a focused package if both apps truly
  need them
- secrets must never use the `NEXT_PUBLIC_` prefix

Turbo must know about variables that affect cached task outputs. Use `env` for
hashed variables and `passThroughEnv` only when a variable is needed at runtime
but should not affect the cache key.

### 7. Establish the Minimum Test Baseline

The API currently has a starter unit test. Before major feature development,
define the minimum test responsibility for each layer.

Required baseline:

| Layer | Minimum Coverage |
| --- | --- |
| `packages/api-types` | Schema parsing and invalid input tests |
| `apps/api` | Service unit tests and API integration tests |
| `apps/web` | Critical component and user-flow tests |
| Full system | At least one web-to-API smoke test |

Every package with meaningful behavior should expose a `test` script so Turbo
can orchestrate and cache it.

Keep test types separate:

```jsonc
{
  "scripts": {
    "test": "jest",
    "test:unit": "jest",
    "test:integration": "jest --config ./test/jest-integration.json",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  }
}
```

Fast unit tests should run on every pull request. Slower end-to-end tests can
run in a separate CI job.

## Phase 1: Architecture Before the First Major Domain

Complete these decisions before the application accumulates many features.

### 1. Define Package Creation Rules

Do not create a package for every small helper. A package should exist when it
has at least one clear reason:

- it is used by multiple applications
- it has an independent public API
- it enforces an architectural boundary
- it has a separate build or test lifecycle
- it needs an explicit owner

Avoid generic dumping-ground packages such as:

```text
packages/common
packages/helpers
packages/shared
```

Prefer focused names:

```text
packages/api-types
packages/auth-contracts
packages/logger
packages/database
packages/config
```

### 2. Organize Applications by Business Domain

Inside each application, group code by domain or feature instead of only by
technical type.

Recommended API direction:

```text
apps/api/src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   └── auth.service.spec.ts
├── users/
├── projects/
├── infrastructure/
└── main.ts
```

Recommended web direction:

```text
apps/web/
├── app/
├── features/
│   ├── auth/
│   ├── users/
│   └── projects/
├── components/
└── lib/
```

Domain code should not import private implementation details from another
domain. Expose intentional public modules instead.

### 3. Treat Shared API Types as Contracts

`@pikri/api-types` is a strong starting point. Keep it focused on transport
contracts:

- request schemas
- response schemas
- shared enums
- serialization rules
- inferred TypeScript types

Do not place database models, NestJS services, React components, or business
logic in this package.

Validate external input at runtime. TypeScript types alone do not validate HTTP
requests or responses.

Consider splitting this package only when it becomes too broad:

```text
packages/contracts-auth
packages/contracts-users
packages/contracts-projects
```

Do not split it prematurely.

### 4. Decide the UI Package Strategy

The current UI package exports source files directly. This is acceptable for
private applications that use compatible React and bundler versions.

Before adding many components, decide:

- whether UI is only for the Pikri web app
- whether UI will support other apps
- whether components require Storybook or another visual review tool
- whether React should be a peer dependency
- whether the package should build to `dist` or continue exporting source

Keep product-specific components inside the web app. Put only reusable,
application-independent components in `@pikri/ui`.

### 5. Standardize Tooling Versions and Configurations

The API currently owns separate TypeScript, ESLint, and Prettier dependencies.
Move it toward the shared configuration packages.

Targets:

- one TypeScript version across the workspace
- one ESLint version across the workspace
- one Prettier version at the root
- shared base rules
- app-specific extensions for Next.js and NestJS

pnpm catalogs or root-level version policies can help prevent version drift.
Version differences should be intentional and documented.

### 6. Define Dependency Direction

Adopt simple dependency rules:

```text
apps -> packages
packages -> focused lower-level packages
packages -X-> apps
web -X-> api implementation
api -X-> web implementation
```

Applications may share contracts, but they must not import each other's source
files.

For a large team, enforce boundaries with ESLint rules, dependency-cruiser, or
another dependency graph check.

## Phase 2: Data, Security, and Operations

These items must be designed before production launch. Start them early if the
first features depend on them.

### Database and Migrations

Choose and document:

- database technology
- migration tool
- local development setup
- test database strategy
- backup and restore process
- migration deployment process
- rollback or forward-fix policy

Migration files must be committed. Production migrations must run as a
controlled deployment step, not automatically from every API instance.

### Authentication and Authorization

Define separately:

- authentication: who the user is
- authorization: what the user can do

Required decisions:

- session or token model
- cookie security settings
- password or external identity provider strategy
- role and permission model
- API authorization enforcement
- account recovery
- audit logging for sensitive actions

The frontend must never be the only place where authorization is enforced.

### API Standards

Before adding many endpoints, define:

- URL and resource naming
- request and response envelope conventions
- pagination
- filtering and sorting
- error response format
- validation errors
- API versioning policy
- idempotency rules where needed
- rate limiting
- API documentation generation

Keep these decisions in a short architecture decision record.

### Logging and Observability

Production API logs should be structured and machine-readable.

Include:

- request or correlation ID
- log level
- service name
- environment
- safe error details
- request duration

Do not log passwords, tokens, cookies, private user data, or secret environment
variables.

Before production, add:

- API health and readiness endpoints
- centralized error tracking
- metrics and dashboards
- uptime checks
- alerting ownership

### Security Baseline

Before production:

- validate all external input
- escape or safely render untrusted output
- configure secure headers
- define CORS explicitly
- add rate limits to sensitive endpoints
- scan dependencies
- rotate secrets
- use least-privilege production credentials
- document data retention and deletion
- review file upload behavior if uploads exist

Add automated dependency updates through Renovate or Dependabot.

## Turborepo Task Design

Every meaningful package task should be callable from the repository root.

Recommended root scripts:

```jsonc
{
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "lint:fix": "turbo run lint:fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "check-types": "turbo run check-types",
    "test": "turbo run test",
    "test:e2e": "turbo run test:e2e"
  }
}
```

Recommended task behavior:

| Task | Cached | Persistent | Notes |
| --- | --- | --- | --- |
| `build` | Yes | No | Declare exact outputs and environment inputs |
| `lint` | Yes | No | Must not modify files |
| `check-types` | Yes | No | Should fail on type errors |
| `test` | Yes | No | Declare coverage output only if needed |
| `dev` | No | Yes | Long-running development process |
| `lint:fix` | No | No | Modifies files |
| `format` | No | No | Modifies files |

Avoid making every `dev` task depend on every dependency build if that creates
slow startup. Shared packages that need compilation may expose persistent
watch tasks and use `turbo watch`.

Enable remote caching when multiple developers or CI machines work on the
repository. Treat remote cache credentials as secrets.

## Deployment Strategy

Deploy `apps/web` and `apps/api` independently.

Each application should define:

- build command
- start command
- required environment variables
- health check
- deployment artifact
- rollback process
- ownership

Do not deploy the entire monorepo as one artifact unless the hosting platform
explicitly requires it.

For container deployments, use Turborepo pruning to create smaller
application-specific build contexts:

```sh
pnpm turbo prune web --docker
pnpm turbo prune api --docker
```

Use separate staging and production environments. Production deployments
should require successful CI and should be traceable to a commit.

## Team Workflow

Adopt these rules before the team grows:

- protect the default branch
- require pull requests
- require passing CI checks
- keep pull requests focused
- use consistent commit or pull-request naming
- assign code ownership for important areas
- document architectural decisions
- review dependency additions
- never commit secrets

Useful repository files to add:

```text
.github/
├── workflows/ci.yml
├── CODEOWNERS
└── pull_request_template.md
docs/
├── architecture/
├── decisions/
└── runbooks/
```

## Definition of Done

A feature is complete only when applicable items are satisfied:

- behavior is implemented
- runtime input is validated
- authorization is enforced by the API
- tests cover important success and failure paths
- lint and type checks pass
- environment variables are documented
- database migrations are committed
- logging and error handling are included
- API contracts are updated
- user-facing behavior is documented
- CI passes

## Pre-Feature Launch Checklist

Complete all items before beginning large-scale feature development:

- [ ] `pnpm lint` passes without modifying files
- [ ] `pnpm check-types` passes
- [ ] `pnpm test` passes
- [ ] `pnpm build` passes without framework warnings
- [ ] Node.js version is aligned across local, CI, and production
- [ ] `BACKEND_URL` and future build-sensitive variables are declared to Turbo
- [ ] `.env.example` files exist for web and API
- [ ] Runtime environment validation exists
- [ ] CI runs on every pull request
- [ ] Default branch requires passing CI
- [ ] Shared package creation rules are agreed
- [ ] Domain organization is agreed
- [ ] API contract ownership is agreed
- [ ] Database and migration strategy is decided
- [ ] Authentication and authorization strategy is decided
- [ ] Deployment environments are defined
- [ ] Logging, health checks, and error tracking are planned

## Recommended Implementation Order

1. Fix lint and Turbo environment declarations.
2. Align Node.js and tooling versions.
3. Update Next.js configuration.
4. Add `.env.example` files and runtime validation.
5. Add CI and branch protection.
6. Add the minimum test baseline.
7. Define application domains and dependency boundaries.
8. Choose database, migrations, authentication, and deployment strategies.
9. Add production observability and security controls.
10. Begin major feature development.

After steps 1 through 6 are complete, the repository is ready for a team to
build significant features safely. Steps 7 through 9 should be completed
before the related product areas or production deployment begin.
