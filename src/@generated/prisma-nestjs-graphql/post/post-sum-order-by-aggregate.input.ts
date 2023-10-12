import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PostSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes_count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dislikes_count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    author_id?: keyof typeof SortOrder;
}
