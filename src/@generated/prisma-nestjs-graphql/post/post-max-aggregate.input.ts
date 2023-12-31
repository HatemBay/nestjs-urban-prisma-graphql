import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PostMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    titleArabic?: true;

    @Field(() => Boolean, {nullable:true})
    titleLatin?: true;

    @Field(() => Boolean, {nullable:true})
    contentArabic?: true;

    @Field(() => Boolean, {nullable:true})
    contentEnglish?: true;

    @Field(() => Boolean, {nullable:true})
    contentFrench?: true;

    @Field(() => Boolean, {nullable:true})
    published?: true;

    @Field(() => Boolean, {nullable:true})
    likesCount?: true;

    @Field(() => Boolean, {nullable:true})
    dislikesCount?: true;

    @Field(() => Boolean, {nullable:true})
    authorId?: true;

    @Field(() => Boolean, {nullable:true})
    isU18?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
