import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ExampleUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    contentArabic!: string;

    @Field(() => String, {nullable:false})
    contentEnglish!: string;

    @Field(() => String, {nullable:false})
    contentFrench!: string;

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
