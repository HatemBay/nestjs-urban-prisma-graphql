import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExampleWhereInput } from './example-where.input';
import { Type } from 'class-transformer';
import { ExampleOrderByWithRelationInput } from './example-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ExampleWhereUniqueInput } from './example-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExampleCountAggregateInput } from './example-count-aggregate.input';
import { ExampleAvgAggregateInput } from './example-avg-aggregate.input';
import { ExampleSumAggregateInput } from './example-sum-aggregate.input';
import { ExampleMinAggregateInput } from './example-min-aggregate.input';
import { ExampleMaxAggregateInput } from './example-max-aggregate.input';

@ArgsType()
export class ExampleAggregateArgs {

    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    where?: ExampleWhereInput;

    @Field(() => [ExampleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExampleOrderByWithRelationInput>;

    @Field(() => ExampleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ExampleWhereUniqueInput, 'id'>;

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
