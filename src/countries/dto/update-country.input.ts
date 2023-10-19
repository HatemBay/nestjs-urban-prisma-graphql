import { CreateCountryInput } from './create-country.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCountryInput extends PartialType(CreateCountryInput) {
  id: number;
}
