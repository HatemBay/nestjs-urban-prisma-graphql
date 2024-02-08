import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { FlagCountOrderByAggregateInput } from './flag-count-order-by-aggregate.input';
import { FlagAvgOrderByAggregateInput } from './flag-avg-order-by-aggregate.input';
import { FlagMaxOrderByAggregateInput } from './flag-max-order-by-aggregate.input';
import { FlagMinOrderByAggregateInput } from './flag-min-order-by-aggregate.input';
import { FlagSumOrderByAggregateInput } from './flag-sum-order-by-aggregate.input';

@InputType()
export class FlagOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reason?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    content?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => FlagCountOrderByAggregateInput, {nullable:true})
    _count?: FlagCountOrderByAggregateInput;

    @Field(() => FlagAvgOrderByAggregateInput, {nullable:true})
    _avg?: FlagAvgOrderByAggregateInput;

    @Field(() => FlagMaxOrderByAggregateInput, {nullable:true})
    _max?: FlagMaxOrderByAggregateInput;

    @Field(() => FlagMinOrderByAggregateInput, {nullable:true})
    _min?: FlagMinOrderByAggregateInput;

    @Field(() => FlagSumOrderByAggregateInput, {nullable:true})
    _sum?: FlagSumOrderByAggregateInput;
}
