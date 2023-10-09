import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleOAuthGuard extends AuthGuard('google') {
  constructor(private configService: ConfigService) {
    super({
      accessType: 'offline',
    });
  }

  //   getRequest(context: ExecutionContext) {
  //     const ctx = GqlExecutionContext.create(context);
  //     const request = ctx.getContext();
  //     request.body = ctx.getArgs().LoginUserInput;

  //     return request;
  //   }
}
