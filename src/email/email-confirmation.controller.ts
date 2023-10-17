import {
  Controller,
  ClassSerializerInterceptor,
  UseInterceptors,
  Post,
  Body,
  Req,
  Query,
  Get,
  UseGuards,
} from '@nestjs/common';
import { ConfirmEmailInput } from '../graphql';
import { EmailConfirmationService } from './email-confirmation.service';
import { SkipAuth } from '../common/decorators/skip-auth.decorator';
import { RequestWithUser } from './interfaces/request-with-user.interface';
import { SkipThrottle, ThrottlerGuard } from '@nestjs/throttler';

// TODO: subject to change to resolver: check when frontend part of the service reached
@Controller('email-confirmation')
@SkipThrottle()
@UseGuards(ThrottlerGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class EmailConfirmationController {
  constructor(
    private readonly emailConfirmationService: EmailConfirmationService,
  ) {}

  @SkipAuth()
  @Get('confirm')
  async confirm(@Query('token') token: string) {
    console.log('sss');
    console.log(token);

    const email =
      await this.emailConfirmationService.decodeConfirmationToken(token);
    console.log(email);

    await this.emailConfirmationService.confirmEmail(email);
  }

  @SkipAuth()
  @Post('resend-confirmation-link')
  async resendConfirmationLink(@Req() request: RequestWithUser) {
    await this.emailConfirmationService.resendConfirmationLink(request.user.id);
  }
}
