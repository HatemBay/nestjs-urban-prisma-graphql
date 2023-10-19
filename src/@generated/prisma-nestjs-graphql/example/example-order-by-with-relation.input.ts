import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PostOrderByWithRelationInput } from '../post/post-order-by-with-relation.input';

@InputType()
export class ExampleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    post_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => PostOrderByWithRelationInput, {nullable:true})
    post?: PostOrderByWithRelationInput;
}
