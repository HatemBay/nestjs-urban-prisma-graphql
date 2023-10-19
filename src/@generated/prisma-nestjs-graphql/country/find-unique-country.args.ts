import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCountryArgs {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    where!: Prisma.AtLeast<CountryWhereUniqueInput, 'id' | 'name'>;
}
