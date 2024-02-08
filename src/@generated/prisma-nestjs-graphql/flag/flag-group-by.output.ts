import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Reason } from '../prisma/reason.enum';
import { FlagCountAggregate } from './flag-count-aggregate.output';
import { FlagAvgAggregate } from './flag-avg-aggregate.output';
import { FlagSumAggregate } from './flag-sum-aggregate.output';
import { FlagMinAggregate } from './flag-min-aggregate.output';
import { FlagMaxAggregate } from './flag-max-aggregate.output';

@ObjectType()
export class FlagGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Reason, {nullable:false})
    reason!: keyof typeof Reason;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => FlagCountAggregate, {nullable:true})
    _count?: FlagCountAggregate;

    @Field(() => FlagAvgAggregate, {nullable:true})
    _avg?: FlagAvgAggregate;

    @Field(() => FlagSumAggregate, {nullable:true})
    _sum?: FlagSumAggregate;

    @Field(() => FlagMinAggregate, {nullable:true})
    _min?: FlagMinAggregate;

    @Field(() => FlagMaxAggregate, {nullable:true})
    _max?: FlagMaxAggregate;
}
