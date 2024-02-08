import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlagWhereInput } from './flag-where.input';
import { Type } from 'class-transformer';
import { FlagOrderByWithAggregationInput } from './flag-order-by-with-aggregation.input';
import { FlagScalarFieldEnum } from './flag-scalar-field.enum';
import { FlagScalarWhereWithAggregatesInput } from './flag-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FlagCountAggregateInput } from './flag-count-aggregate.input';
import { FlagAvgAggregateInput } from './flag-avg-aggregate.input';
import { FlagSumAggregateInput } from './flag-sum-aggregate.input';
import { FlagMinAggregateInput } from './flag-min-aggregate.input';
import { FlagMaxAggregateInput } from './flag-max-aggregate.input';

@ArgsType()
export class FlagGroupByArgs {

    @Field(() => FlagWhereInput, {nullable:true})
    @Type(() => FlagWhereInput)
    where?: FlagWhereInput;

    @Field(() => [FlagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FlagOrderByWithAggregationInput>;

    @Field(() => [FlagScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FlagScalarFieldEnum>;

    @Field(() => FlagScalarWhereWithAggregatesInput, {nullable:true})
    having?: FlagScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FlagCountAggregateInput, {nullable:true})
    _count?: FlagCountAggregateInput;

    @Field(() => FlagAvgAggregateInput, {nullable:true})
    _avg?: FlagAvgAggregateInput;

    @Field(() => FlagSumAggregateInput, {nullable:true})
    _sum?: FlagSumAggregateInput;

    @Field(() => FlagMinAggregateInput, {nullable:true})
    _min?: FlagMinAggregateInput;

    @Field(() => FlagMaxAggregateInput, {nullable:true})
    _max?: FlagMaxAggregateInput;
}
