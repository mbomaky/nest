import {Injectable, NestInterceptor, ExecutionContext, CallHandler} from "@nestjs/common";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // before handle() — code before method execution
    return next.handle().pipe(
      // after handle() — code after method execution
      map((data) => ({
        success: true,
        data: data,
        timestamp: new Date().toISOString(),
      }))
    );
  }
}
