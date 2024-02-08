import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { IsOptional } from 'class-validator';
import { Role } from '../prisma/role.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PostUncheckedUpdateManyWithoutAuthorNestedInput } from '../post/post-unchecked-update-many-without-author-nested.input';
import { PostUncheckedUpdateManyWithoutLikedByNestedInput } from '../post/post-unchecked-update-many-without-liked-by-nested.input';
import { PostUncheckedUpdateManyWithoutDislikedByNestedInput } from '../post/post-unchecked-update-many-without-disliked-by-nested.input';
import { FlagUncheckedUpdateManyWithoutUserNestedInput } from '../flag/flag-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    @IsOptional()
    username?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    @IsOptional()
    email?: string;

    @Field(() => String, {nullable:true})
    @IsOptional()
    password?: string;

    @Field(() => String, {nullable:true})
    @IsOptional()
    name?: string;

    @Field(() => Role, {nullable:true})
    @IsOptional()
    role?: keyof typeof Role;

    @Field(() => Boolean, {nullable:true})
    @IsOptional()
    isU18?: boolean;

    @Field(() => Boolean, {nullable:true})
    @IsOptional()
    emailVerified?: boolean;

    @Field(() => Date, {nullable:true})
    @IsOptional()
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    @IsOptional()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    @IsOptional()
    googleId?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    @IsOptional()
    googleProfile?: any;

    @Field(() => Int, {nullable:true})
    @IsOptional()
    countryId?: number;

    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    @IsOptional()
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => PostUncheckedUpdateManyWithoutLikedByNestedInput, {nullable:true})
    @IsOptional()
    likedPosts?: PostUncheckedUpdateManyWithoutLikedByNestedInput;

    @Field(() => PostUncheckedUpdateManyWithoutDislikedByNestedInput, {nullable:true})
    @IsOptional()
    dislikedPosts?: PostUncheckedUpdateManyWithoutDislikedByNestedInput;

    @Field(() => FlagUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @IsOptional()
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput;
}
