import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { HealthResponse } from './dto/req/health.resp.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Health check',
    description: 'Returns the health status of the application',
  })
  @ApiOkResponse({ type: HealthResponse })
  @Get('health')
  health() {
    return this.appService.health();
  }
}
