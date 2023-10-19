import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';
import { Type } from 'class-transformer';
import { CountryOrderByWithRelationInput } from './country-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CountryScalarFieldEnum } from './country-scalar-field.enum';

@ArgsType()
export class FindManyCountryArgs {

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    where?: CountryWhereInput;

    @Field(() => [CountryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CountryOrderByWithRelationInput>;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CountryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CountryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CountryScalarFieldEnum>;
}
