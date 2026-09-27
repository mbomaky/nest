import { IsEnum, IsString, Validate } from 'class-validator';
import { IdentifierValidator } from '../../../../shares/validators/identifier.validator.js';
import { ApiProperty } from '@nestjs/swagger';

export class SendOTPReq {
  @ApiProperty({ example: '+09123456789' })
  @IsString()
  @Validate(IdentifierValidator)
  identifier: string;

  @ApiProperty({ example: 'phone', enum: ['phone', 'email'] })
  @IsEnum(['phone', 'email'])
  type: 'phone' | 'email';
}
