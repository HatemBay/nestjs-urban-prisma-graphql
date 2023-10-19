import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';
import { Type } from 'class-transformer';
import { CountryOrderByWithRelationInput } from './country-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CountryCountAggregateInput } from './country-count-aggregate.input';
import { CountryAvgAggregateInput } from './country-avg-aggregate.input';
import { CountrySumAggregateInput } from './country-sum-aggregate.input';
import { CountryMinAggregateInput } from './country-min-aggregate.input';
import { CountryMaxAggregateInput } from './country-max-aggregate.input';

@ArgsType()
export class CountryAggregateArgs {

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

    @Field(() => CountryCountAggregateInput, {nullable:true})
    _count?: CountryCountAggregateInput;

    @Field(() => CountryAvgAggregateInput, {nullable:true})
    _avg?: CountryAvgAggregateInput;

    @Field(() => CountrySumAggregateInput, {nullable:true})
    _sum?: CountrySumAggregateInput;

    @Field(() => CountryMinAggregateInput, {nullable:true})
    _min?: CountryMinAggregateInput;

    @Field(() => CountryMaxAggregateInput, {nullable:true})
    _max?: CountryMaxAggregateInput;
}
