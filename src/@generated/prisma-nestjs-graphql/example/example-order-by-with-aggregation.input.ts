import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExampleCountOrderByAggregateInput } from './example-count-order-by-aggregate.input';
import { ExampleAvgOrderByAggregateInput } from './example-avg-order-by-aggregate.input';
import { ExampleMaxOrderByAggregateInput } from './example-max-order-by-aggregate.input';
import { ExampleMinOrderByAggregateInput } from './example-min-order-by-aggregate.input';
import { ExampleSumOrderByAggregateInput } from './example-sum-order-by-aggregate.input';

@InputType()
export class ExampleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentArabic?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentEnglish?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentFrench?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ExampleCountOrderByAggregateInput, {nullable:true})
    _count?: ExampleCountOrderByAggregateInput;

    @Field(() => ExampleAvgOrderByAggregateInput, {nullable:true})
    _avg?: ExampleAvgOrderByAggregateInput;

    @Field(() => ExampleMaxOrderByAggregateInput, {nullable:true})
    _max?: ExampleMaxOrderByAggregateInput;

    @Field(() => ExampleMinOrderByAggregateInput, {nullable:true})
    _min?: ExampleMinOrderByAggregateInput;

    @Field(() => ExampleSumOrderByAggregateInput, {nullable:true})
    _sum?: ExampleSumOrderByAggregateInput;
}
