import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryCreateInput } from './country-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCountryArgs {

    @Field(() => CountryCreateInput, {nullable:false})
    @Type(() => CountryCreateInput)
    data!: CountryCreateInput;
}
