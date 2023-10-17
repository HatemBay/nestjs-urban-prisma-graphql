import { AuthService } from './auth.service';
import { Controller, Get, Req, UseFilters, UseGuards } from '@nestjs/common';
import { SkipAuth } from '../common/decorators/skip-auth.decorator';
import { GoogleOAuthGuard } from './google-oauth.guard';
import { EmailTakenExceptionFilter } from '../common/filters/email-taken-exception.filter';
import { SkipThrottle, ThrottlerGuard } from '@nestjs/throttler';

@Controller('auth')
@SkipThrottle()
@UseGuards(ThrottlerGuard)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  @UseFilters(EmailTakenExceptionFilter)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async googleAuth(@Req() req) {
    // Guard will redirect
  }

  @Get('/google/google-redirect')
  @SkipAuth()
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req);
  }
}
