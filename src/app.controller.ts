import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SkipThrottle, ThrottlerGuard } from '@nestjs/throttler';

@SkipThrottle()
@UseGuards(ThrottlerGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
