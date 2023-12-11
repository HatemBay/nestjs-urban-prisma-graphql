import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ExampleUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    contentArabic?: string;

    @Field(() => String, {nullable:true})
    contentEnglish?: string;

    @Field(() => String, {nullable:true})
    contentFrench?: string;

    @Field(() => Int, {nullable:true})
    postId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
