import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    titleArabic!: number;

    @Field(() => Int, {nullable:false})
    titleLatin!: number;

    @Field(() => Int, {nullable:false})
    contentArabic!: number;

    @Field(() => Int, {nullable:false})
    contentEnglish!: number;

    @Field(() => Int, {nullable:false})
    contentFrench!: number;

    @Field(() => Int, {nullable:false})
    published!: number;

    @Field(() => Int, {nullable:false})
    likesCount!: number;

    @Field(() => Int, {nullable:false})
    dislikesCount!: number;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => Int, {nullable:false})
    isU18!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
