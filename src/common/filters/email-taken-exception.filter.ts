import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

export class EmailTakenException extends HttpException {
  constructor() {
    super('Email taken', HttpStatus.CONFLICT);
  }
}

@Catch(EmailTakenException)
export class EmailTakenExceptionFilter implements ExceptionFilter {
  constructor() {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    res.redirect(`${process.env.SITE_URL}/auth`);
    // res.redirect(`${process.env.SITE_URL}/login?email_taken=true`); // TODO: replace line above when at frontend phase
  }
}
