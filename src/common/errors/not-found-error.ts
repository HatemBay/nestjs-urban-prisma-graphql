import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundError extends HttpException {
  constructor(entity: string) {
    super(`The ${entity} was not found.`, HttpStatus.NOT_FOUND);
  }
}
