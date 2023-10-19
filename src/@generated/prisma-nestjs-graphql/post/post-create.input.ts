import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';
import { ExampleCreateNestedManyWithoutPostInput } from '../example/example-create-nested-many-without-post.input';

@InputType()
export class PostCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Int, {nullable:true})
    likes_count?: number;

    @Field(() => Int, {nullable:true})
    dislikes_count?: number;

    @Field(() => Boolean, {nullable:true})
    is_u_18?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    author!: UserCreateNestedOneWithoutPostsInput;

    @Field(() => ExampleCreateNestedManyWithoutPostInput, {nullable:true})
    examples?: ExampleCreateNestedManyWithoutPostInput;
}
