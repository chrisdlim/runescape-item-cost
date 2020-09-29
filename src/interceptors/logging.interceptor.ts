import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ContextIdFactory } from '@nestjs/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // console.log('ctx before', context);
    const response = context.switchToHttp().getResponse();
    const request  = context.switchToHttp().getRequest();
    const now      = Date.now();
    const method   = request.method;
    const url      = request.originalUrl;
    // return next.handle().pipe(map(data => {
    //   console.log(data)
    //   return { data };
    //   // ({ data }))
    // }));
    return next.handle().pipe(
      tap((data) => {
        const response = context.switchToHttp().getResponse();
        const delay = Date.now() - now;
        console.log(`Logging Interceptor: status: ${response.statusCode} | [${method}] ${url} | time: ${delay}ms | payload: ${JSON.stringify(data)}`);
      }),
      catchError((error) => {
        const response = context.switchToHttp().getResponse();
        const delay = Date.now() - now;
        console.error(`Logging Interceptor: ${response.statusCode} | [${method}] ${url} - ${delay}ms`);
        return throwError(error);
      }),
    );
  }
}
