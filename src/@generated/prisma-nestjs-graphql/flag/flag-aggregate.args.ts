import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlagWhereInput } from './flag-where.input';
import { Type } from 'class-transformer';
import { FlagOrderByWithRelationInput } from './flag-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FlagWhereUniqueInput } from './flag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FlagCountAggregateInput } from './flag-count-aggregate.input';
import { FlagAvgAggregateInput } from './flag-avg-aggregate.input';
import { FlagSumAggregateInput } from './flag-sum-aggregate.input';
import { FlagMinAggregateInput } from './flag-min-aggregate.input';
import { FlagMaxAggregateInput } from './flag-max-aggregate.input';

@ArgsType()
export class FlagAggregateArgs {

    @Field(() => FlagWhereInput, {nullable:true})
    @Type(() => FlagWhereInput)
    where?: FlagWhereInput;

    @Field(() => [FlagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FlagOrderByWithRelationInput>;

    @Field(() => FlagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FlagWhereUniqueInput, 'id'>;

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
