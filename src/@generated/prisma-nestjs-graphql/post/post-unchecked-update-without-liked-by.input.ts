import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FlagUncheckedUpdateManyWithoutPostNestedInput } from '../flag/flag-unchecked-update-many-without-post-nested.input';
import { ExampleUncheckedUpdateOneWithoutPostNestedInput } from '../example/example-unchecked-update-one-without-post-nested.input';
import { UserUncheckedUpdateManyWithoutDislikedPostsNestedInput } from '../user/user-unchecked-update-many-without-disliked-posts-nested.input';

@InputType()
export class PostUncheckedUpdateWithoutLikedByInput {

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

    @Field(() => ExampleUncheckedUpdateOneWithoutPostNestedInput, {nullable:true})
    example?: ExampleUncheckedUpdateOneWithoutPostNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutDislikedPostsNestedInput, {nullable:true})
    dislikedBy?: UserUncheckedUpdateManyWithoutDislikedPostsNestedInput;
}
