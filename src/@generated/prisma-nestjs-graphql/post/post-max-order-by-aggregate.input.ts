import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PostMaxOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    published?: keyof typeof SortOrder;

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
}
