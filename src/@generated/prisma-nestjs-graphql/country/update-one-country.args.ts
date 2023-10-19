import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryUpdateInput } from './country-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';

@ArgsType()
export class UpdateOneCountryArgs {

    @Field(() => CountryUpdateInput, {nullable:false})
    @Type(() => CountryUpdateInput)
    data!: CountryUpdateInput;

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    where!: Prisma.AtLeast<CountryWhereUniqueInput, 'id' | 'name'>;
}
