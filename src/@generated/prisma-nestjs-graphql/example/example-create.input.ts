import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutExampleInput } from '../post/post-create-nested-one-without-example.input';

@InputType()
export class ExampleCreateInput {

    @Field(() => String, {nullable:false})
    contentArabic!: string;

    @Field(() => String, {nullable:false})
    contentEnglish!: string;

    @Field(() => String, {nullable:false})
    contentFrench!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PostCreateNestedOneWithoutExampleInput, {nullable:false})
    post!: PostCreateNestedOneWithoutExampleInput;
}
