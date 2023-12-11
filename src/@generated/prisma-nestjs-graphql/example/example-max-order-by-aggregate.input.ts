import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ExampleMaxOrderByAggregateInput {

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
}
