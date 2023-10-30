import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutPostsNestedInput } from '../user/user-update-one-required-without-posts-nested.input';
import { ExampleUpdateManyWithoutPostNestedInput } from '../example/example-update-many-without-post-nested.input';

@InputType()
export class PostUpdateInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Int, {nullable:true})
    likesCount?: number;

    @Field(() => Int, {nullable:true})
    dislikesCount?: number;

    @Field(() => Boolean, {nullable:true})
    isU18?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutPostsNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;

    @Field(() => ExampleUpdateManyWithoutPostNestedInput, {nullable:true})
    examples?: ExampleUpdateManyWithoutPostNestedInput;
}