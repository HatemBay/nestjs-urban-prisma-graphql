import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutLikedPostsInput } from './user-update-without-liked-posts.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutLikedPostsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>;

    @Field(() => UserUpdateWithoutLikedPostsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLikedPostsInput)
    data!: UserUpdateWithoutLikedPostsInput;
}
