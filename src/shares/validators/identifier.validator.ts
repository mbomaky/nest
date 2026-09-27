import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { SendOTPReq } from '../../modules/auth/dto/req/sendOTP.req.js';

@ValidatorConstraint({ name: 'identifier', async: true })
export class IdentifierValidator implements ValidatorConstraintInterface {
  validate(identifier: string, args: ValidationArguments): boolean {
    const data = args.object as SendOTPReq;

    if (typeof data.type !== 'string') {
      return false;
    }

    if (data.type === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    }

    if (data.type === 'phone') {
      return /^\+?\d{10,15}$/.test(identifier);
    }

    return false;
  }

  defaultMessage(args: ValidationArguments): string {
    const data = args.object as SendOTPReq;

    if (data.type === 'email') {
      return 'identifier must be a valid email address';
    }

    if (data.type === 'phone') {
      return 'identifier must be a valid phone number';
    }

    return 'Invalid identifier';
  }
}
