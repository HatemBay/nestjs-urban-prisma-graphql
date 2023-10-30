import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutExamplesInput } from '../post/post-create-nested-one-without-examples.input';

@InputType()
export class ExampleCreateInput {

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PostCreateNestedOneWithoutExamplesInput, {nullable:false})
    post!: PostCreateNestedOneWithoutExamplesInput;
}
