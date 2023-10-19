import { HttpException } from '@nestjs/common';

export class CustomError extends HttpException {
  constructor(message: string, code: number) {
    super(message, code);
  }
}
