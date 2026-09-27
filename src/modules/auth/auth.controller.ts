import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { SendOTPReq } from './dto/req/sendOTP.req.js';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor() {}

  @ApiOperation({ summary: 'Send OTP', description: 'Send OTP to user' })
  @ApiOkResponse()
  @Post('otp/send')
  @HttpCode(HttpStatus.OK)
  async sendOTP(@Body() dto: SendOTPReq) {
    return { ok: true };
  }
}
