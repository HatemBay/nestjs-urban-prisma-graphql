import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ExampleOrderByRelationAggregateInput } from '../example/example-order-by-relation-aggregate.input';

@InputType()
export class PostOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    published?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    likes_count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dislikes_count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    author_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_u_18?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: UserOrderByWithRelationInput;

    @Field(() => ExampleOrderByRelationAggregateInput, {nullable:true})
    examples?: ExampleOrderByRelationAggregateInput;
}
