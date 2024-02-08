import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FlagUncheckedUpdateManyWithoutPostNestedInput } from '../flag/flag-unchecked-update-many-without-post-nested.input';
import { UserUncheckedUpdateManyWithoutLikedPostsNestedInput } from '../user/user-unchecked-update-many-without-liked-posts-nested.input';
import { UserUncheckedUpdateManyWithoutDislikedPostsNestedInput } from '../user/user-unchecked-update-many-without-disliked-posts-nested.input';

@InputType()
export class PostUncheckedUpdateWithoutExampleInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => Boolean, {nullable:true})
    isU18?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FlagUncheckedUpdateManyWithoutPostNestedInput, {nullable:true})
    flags?: FlagUncheckedUpdateManyWithoutPostNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutLikedPostsNestedInput, {nullable:true})
    likedBy?: UserUncheckedUpdateManyWithoutLikedPostsNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutDislikedPostsNestedInput, {nullable:true})
    dislikedBy?: UserUncheckedUpdateManyWithoutDislikedPostsNestedInput;
}
