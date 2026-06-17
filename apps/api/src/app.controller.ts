import { Controller, Get } from '@nestjs/common';
import type { HealthCheckResponse } from '@pikri/api-types';

@Controller()
export class AppController {
  @Get('health')
  health(): HealthCheckResponse {
    return {
      status: 'ok',
      timestamp: new Date(),
    };
  }
}
