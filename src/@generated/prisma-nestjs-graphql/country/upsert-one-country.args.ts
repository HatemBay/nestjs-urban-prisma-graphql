import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { Type } from 'class-transformer';
import { CountryCreateInput } from './country-create.input';
import { CountryUpdateInput } from './country-update.input';

@ArgsType()
export class UpsertOneCountryArgs {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    where!: Prisma.AtLeast<CountryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => CountryCreateInput, {nullable:false})
    @Type(() => CountryCreateInput)
    create!: CountryCreateInput;

    @Field(() => CountryUpdateInput, {nullable:false})
    @Type(() => CountryUpdateInput)
    update!: CountryUpdateInput;
}
