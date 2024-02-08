import {
  Controller,
  Post,
  Req,
  Query,
  Get,
  UseGuards,
  Res,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { EmailConfirmationService } from './email-confirmation.service';
import { SkipAuth } from '../common/decorators/skip-auth.decorator';
import { RequestWithUser } from './interfaces/request-with-user.interface';
import { SkipThrottle, ThrottlerGuard } from '@nestjs/throttler';
import { ConfigService } from '@nestjs/config';

// TODO: subject to change to resolver + confirming method: check when frontend part of the service reached
@Controller('email-confirmation')
@SkipThrottle()
@UseGuards(ThrottlerGuard)
export class EmailConfirmationController {
  constructor(
    private readonly emailConfirmationService: EmailConfirmationService,
    private readonly configService: ConfigService,
  ) {}

  @SkipAuth()
  @Get('confirm')
  async confirm(@Query('token') token: string, @Res() res: any) {
    const email =
      await this.emailConfirmationService.decodeConfirmationToken(token);

    return await this.emailConfirmationService.confirmEmail(email).then(() => {
      Logger.log('Email confirmed successfully');
      res.status(HttpStatus.OK).send('Email confirmed successfully');
      return res.redirect(`${this.configService.get('SITE_URL')}/`);
    });
  }

  @SkipAuth()
  @Post('resend-confirmation-link')
  async resendConfirmationLink(@Req() request: RequestWithUser) {
    console.log(request);
    const { user } = request.body as any;

    await this.emailConfirmationService.resendConfirmationLink(user.id);
  }
}
