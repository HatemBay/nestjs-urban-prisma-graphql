import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(private reflector: Reflector) {
    super();
  }

  public getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    return request;
  }

  // Handle request here works instead of canActivate because it will return an error
  // if there's no authorization header in the request so the metadata should be handled
  // before checking on the headers
  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
    status?: any,
  ): TUser {
    // const ctx = GqlExecutionContext.create(context);

    const skipAuth =
      this.reflector.get<boolean>('skipAuth', context.getHandler()) || false;

    if (skipAuth) {
      return null;
    }
    return super.handleRequest(err, user, info, context, status);
  }
}
