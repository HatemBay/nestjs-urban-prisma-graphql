import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateOneRequiredWithoutExamplesNestedInput } from '../post/post-update-one-required-without-examples-nested.input';

@InputType()
export class ExampleUpdateInput {

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PostUpdateOneRequiredWithoutExamplesNestedInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutExamplesNestedInput;
}
