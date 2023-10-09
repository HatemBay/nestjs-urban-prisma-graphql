import { AuthService } from './auth.service';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { SkipAuth } from '../common/decorators/skip-auth.decorator';
import { GoogleOAuthGuard } from './google-oauth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
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
