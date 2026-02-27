import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from "@nestjs/common";

@Injectable()
export class AccessGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const isAdmin = request.headers["x-admin"] === "true";
    if (!isAdmin) {
      throw new ForbiddenException("No access!");
    }

    return true;
  }
}
