import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';
import { Type } from 'class-transformer';
import { CountryOrderByWithAggregationInput } from './country-order-by-with-aggregation.input';
import { CountryScalarFieldEnum } from './country-scalar-field.enum';
import { CountryScalarWhereWithAggregatesInput } from './country-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CountryCountAggregateInput } from './country-count-aggregate.input';
import { CountryAvgAggregateInput } from './country-avg-aggregate.input';
import { CountrySumAggregateInput } from './country-sum-aggregate.input';
import { CountryMinAggregateInput } from './country-min-aggregate.input';
import { CountryMaxAggregateInput } from './country-max-aggregate.input';

@ArgsType()
export class CountryGroupByArgs {

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    where?: CountryWhereInput;

    @Field(() => [CountryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CountryOrderByWithAggregationInput>;

    @Field(() => [CountryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CountryScalarFieldEnum>;

    @Field(() => CountryScalarWhereWithAggregatesInput, {nullable:true})
    having?: CountryScalarWhereWithAggregatesInput;

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
