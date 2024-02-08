import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutPostsNestedInput } from '../user/user-update-one-required-without-posts-nested.input';
import { FlagUpdateManyWithoutPostNestedInput } from '../flag/flag-update-many-without-post-nested.input';
import { UserUpdateManyWithoutLikedPostsNestedInput } from '../user/user-update-many-without-liked-posts-nested.input';
import { UserUpdateManyWithoutDislikedPostsNestedInput } from '../user/user-update-many-without-disliked-posts-nested.input';

@InputType()
export class PostUpdateWithoutExampleInput {

    @Field(() => String, {nullable:true})
    titleArabic?: string;

    @Field(() => String, {nullable:true})
    titleLatin?: string;

    @Field(() => String, {nullable:true})
    contentArabic?: string;

    @Field(() => String, {nullable:true})
    contentEnglish?: string;

    @Field(() => String, {nullable:true})
    contentFrench?: string;

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

    @Field(() => FlagUpdateManyWithoutPostNestedInput, {nullable:true})
    flags?: FlagUpdateManyWithoutPostNestedInput;

    @Field(() => UserUpdateManyWithoutLikedPostsNestedInput, {nullable:true})
    likedBy?: UserUpdateManyWithoutLikedPostsNestedInput;

    @Field(() => UserUpdateManyWithoutDislikedPostsNestedInput, {nullable:true})
    dislikedBy?: UserUpdateManyWithoutDislikedPostsNestedInput;
}
