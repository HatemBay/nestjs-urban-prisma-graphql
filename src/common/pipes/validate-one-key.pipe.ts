import { PipeTransform, Injectable } from '@nestjs/common';
import { MultipleOrOneUniqueFieldsError } from '../errors/multiple-or-one-unique-fields-error';

@Injectable()
export class ValidateOneKeyPipe implements PipeTransform {
  entity: string = '';
  constructor(entity: string) {
    this.entity = entity;
  }

  transform(input: any) {
    const keys = Object.keys(input).length;
    if (keys !== 1) {
      throw new MultipleOrOneUniqueFieldsError(this.entity);
    }
    return input;
  }
}
