import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExampleWhereInput } from './example-where.input';
import { Type } from 'class-transformer';
import { ExampleOrderByWithAggregationInput } from './example-order-by-with-aggregation.input';
import { ExampleScalarFieldEnum } from './example-scalar-field.enum';
import { ExampleScalarWhereWithAggregatesInput } from './example-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ExampleCountAggregateInput } from './example-count-aggregate.input';
import { ExampleAvgAggregateInput } from './example-avg-aggregate.input';
import { ExampleSumAggregateInput } from './example-sum-aggregate.input';
import { ExampleMinAggregateInput } from './example-min-aggregate.input';
import { ExampleMaxAggregateInput } from './example-max-aggregate.input';

@ArgsType()
export class ExampleGroupByArgs {

    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    where?: ExampleWhereInput;

    @Field(() => [ExampleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ExampleOrderByWithAggregationInput>;

    @Field(() => [ExampleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ExampleScalarFieldEnum>;

    @Field(() => ExampleScalarWhereWithAggregatesInput, {nullable:true})
    having?: ExampleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ExampleCountAggregateInput, {nullable:true})
    _count?: ExampleCountAggregateInput;

    @Field(() => ExampleAvgAggregateInput, {nullable:true})
    _avg?: ExampleAvgAggregateInput;

    @Field(() => ExampleSumAggregateInput, {nullable:true})
    _sum?: ExampleSumAggregateInput;

    @Field(() => ExampleMinAggregateInput, {nullable:true})
    _min?: ExampleMinAggregateInput;

    @Field(() => ExampleMaxAggregateInput, {nullable:true})
    _max?: ExampleMaxAggregateInput;
}
