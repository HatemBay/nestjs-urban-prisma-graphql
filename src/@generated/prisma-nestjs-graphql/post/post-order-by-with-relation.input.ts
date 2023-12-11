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
    titleArabic?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    titleLatin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentArabic?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentEnglish?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentFrench?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    published?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    likesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dislikesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isU18?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: UserOrderByWithRelationInput;

    @Field(() => ExampleOrderByRelationAggregateInput, {nullable:true})
    examples?: ExampleOrderByRelationAggregateInput;
}
