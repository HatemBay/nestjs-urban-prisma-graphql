import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';
import { FlagCreateNestedManyWithoutPostInput } from '../flag/flag-create-nested-many-without-post.input';
import { ExampleCreateNestedOneWithoutPostInput } from '../example/example-create-nested-one-without-post.input';
import { UserCreateNestedManyWithoutLikedPostsInput } from '../user/user-create-nested-many-without-liked-posts.input';
import { UserCreateNestedManyWithoutDislikedPostsInput } from '../user/user-create-nested-many-without-disliked-posts.input';

@InputType()
export class PostCreateInput {

    @Field(() => String, {nullable:false})
    titleArabic!: string;

    @Field(() => String, {nullable:false})
    titleLatin!: string;

    @Field(() => String, {nullable:false})
    contentArabic!: string;

    @Field(() => String, {nullable:false})
    contentEnglish!: string;

    @Field(() => String, {nullable:false})
    contentFrench!: string;

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

    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    author!: UserCreateNestedOneWithoutPostsInput;

    @Field(() => FlagCreateNestedManyWithoutPostInput, {nullable:true})
    flags?: FlagCreateNestedManyWithoutPostInput;

    @Field(() => ExampleCreateNestedOneWithoutPostInput, {nullable:true})
    example?: ExampleCreateNestedOneWithoutPostInput;

    @Field(() => UserCreateNestedManyWithoutLikedPostsInput, {nullable:true})
    likedBy?: UserCreateNestedManyWithoutLikedPostsInput;

    @Field(() => UserCreateNestedManyWithoutDislikedPostsInput, {nullable:true})
    dislikedBy?: UserCreateNestedManyWithoutDislikedPostsInput;
}
