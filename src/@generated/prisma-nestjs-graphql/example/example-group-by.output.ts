import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExampleCountAggregate } from './example-count-aggregate.output';
import { ExampleAvgAggregate } from './example-avg-aggregate.output';
import { ExampleSumAggregate } from './example-sum-aggregate.output';
import { ExampleMinAggregate } from './example-min-aggregate.output';
import { ExampleMaxAggregate } from './example-max-aggregate.output';

@ObjectType()
export class ExampleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    post_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => ExampleCountAggregate, {nullable:true})
    _count?: ExampleCountAggregate;

    @Field(() => ExampleAvgAggregate, {nullable:true})
    _avg?: ExampleAvgAggregate;

    @Field(() => ExampleSumAggregate, {nullable:true})
    _sum?: ExampleSumAggregate;

    @Field(() => ExampleMinAggregate, {nullable:true})
    _min?: ExampleMinAggregate;

    @Field(() => ExampleMaxAggregate, {nullable:true})
    _max?: ExampleMaxAggregate;
}
