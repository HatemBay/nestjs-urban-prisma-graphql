import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PostOrderByWithRelationInput } from '../post/post-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class FlagOrderByWithRelationInput {

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

    @Field(() => PostOrderByWithRelationInput, {nullable:true})
    Post?: PostOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: UserOrderByWithRelationInput;
}
