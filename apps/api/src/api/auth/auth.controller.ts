import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { Request as ExpressRequest } from 'express';

import type { JwtPayload } from '@pikri/api-types';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../../common/guards';
import { RegisterDto, LoginDto } from './dto';

const registerExample = {
  firstName: 'Nika',
  lastName: 'Beridze',
  email: 'nika@example.com',
  password: 'secret123',
  role: 'CUSTOMER',
};

const loginExample = {
  email: 'nika@example.com',
  password: 'secret123',
};

const authSuccessExample = {
  user: {
    id: '8f3a5ce7-0f91-4d11-9e2b-d6ef8e8e6a11',
    firstName: 'Nika',
    lastName: 'Beridze',
    email: 'nika@example.com',
    role: 'CUSTOMER',
    pushToken: null,
    isOnline: false,
    createdAt: '2026-06-17T00:00:00.000Z',
    updatedAt: '2026-06-17T00:00:00.000Z',
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example.payload',
};

const meExample = {
  sub: '8f3a5ce7-0f91-4d11-9e2b-d6ef8e8e6a11',
  email: 'nika@example.com',
  role: 'CUSTOMER',
};

@ApiTags('Auth')
@ApiExtraModels(RegisterDto, LoginDto)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({
    schema: {
      allOf: [{ $ref: getSchemaPath(RegisterDto) }],
      example: registerExample,
    },
  })
  @ApiCreatedResponse({
    description: 'User registered successfully',
    example: authSuccessExample,
  })
  @ApiConflictResponse({
    description: 'Email already in use',
    example: {
      message: 'Email already in use',
      error: 'Conflict',
      statusCode: 409,
    },
  })
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiBody({
    schema: {
      allOf: [{ $ref: getSchemaPath(LoginDto) }],
      example: loginExample,
    },
  })
  @ApiCreatedResponse({
    description: 'User logged in successfully',
    example: authSuccessExample,
  })
  @ApiUnauthorizedResponse({
    description: 'Invalid credentials',
    example: {
      message: 'Invalid Credentials',
      error: 'Unauthorized',
      statusCode: 401,
    },
  })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('me')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Get current authenticated user' })
  @ApiOkResponse({
    description: 'Current user payload returned successfully',
    example: meExample,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
    example: {
      message: 'Invalid or expired token',
      error: 'Unauthorized',
      statusCode: 401,
    },
  })
  @UseGuards(JwtAuthGuard)
  me(@Request() req: ExpressRequest & { user: JwtPayload }) {
    return req.user;
  }
}
