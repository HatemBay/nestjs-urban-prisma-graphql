import { HttpException, HttpStatus } from '@nestjs/common';

export class MultipleOrOneUniqueFieldsError extends HttpException {
  constructor(entity: string) {
    super(
      `Please enter exactly one field to find the ${entity}.`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
