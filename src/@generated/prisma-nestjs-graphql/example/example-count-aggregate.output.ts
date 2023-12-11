import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ExampleCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    contentArabic!: number;

    @Field(() => Int, {nullable:false})
    contentEnglish!: number;

    @Field(() => Int, {nullable:false})
    contentFrench!: number;

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
