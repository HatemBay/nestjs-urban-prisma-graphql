import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

export class EmailTakenException extends HttpException {
  constructor() {
    super('Email taken', HttpStatus.CONFLICT);
  }
}

@Catch(EmailTakenException)
export class EmailTakenExceptionFilter implements ExceptionFilter {
  constructor(private readonly configService: ConfigService) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    res.redirect(`${this.configService.get('SITE_URL')}/auth`);
    // res.redirect(`${this.configService.get('SITE_URL')}/login?email_taken=true`); // TODO: replace line above when at frontend phase
  }
}
