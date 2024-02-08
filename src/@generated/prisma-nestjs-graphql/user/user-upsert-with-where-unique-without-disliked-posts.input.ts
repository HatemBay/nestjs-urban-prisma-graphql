import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDislikedPostsInput } from './user-update-without-disliked-posts.input';
import { UserCreateWithoutDislikedPostsInput } from './user-create-without-disliked-posts.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutDislikedPostsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>;

    @Field(() => UserUpdateWithoutDislikedPostsInput, {nullable:false})
    @Type(() => UserUpdateWithoutDislikedPostsInput)
    update!: UserUpdateWithoutDislikedPostsInput;

    @Field(() => UserCreateWithoutDislikedPostsInput, {nullable:false})
    @Type(() => UserCreateWithoutDislikedPostsInput)
    create!: UserCreateWithoutDislikedPostsInput;
}
