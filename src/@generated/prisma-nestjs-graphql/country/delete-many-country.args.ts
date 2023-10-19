import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCountryArgs {

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    where?: CountryWhereInput;
}
