import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FlagUncheckedCreateNestedManyWithoutPostInput } from '../flag/flag-unchecked-create-nested-many-without-post.input';
import { ExampleUncheckedCreateNestedOneWithoutPostInput } from '../example/example-unchecked-create-nested-one-without-post.input';
import { UserUncheckedCreateNestedManyWithoutDislikedPostsInput } from '../user/user-unchecked-create-nested-many-without-disliked-posts.input';

@InputType()
export class PostUncheckedCreateWithoutLikedByInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => Boolean, {nullable:true})
    isU18?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FlagUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    flags?: FlagUncheckedCreateNestedManyWithoutPostInput;

    @Field(() => ExampleUncheckedCreateNestedOneWithoutPostInput, {nullable:true})
    example?: ExampleUncheckedCreateNestedOneWithoutPostInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutDislikedPostsInput, {nullable:true})
    dislikedBy?: UserUncheckedCreateNestedManyWithoutDislikedPostsInput;
}
