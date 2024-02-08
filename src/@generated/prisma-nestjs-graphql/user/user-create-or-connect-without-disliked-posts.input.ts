import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDislikedPostsInput } from './user-create-without-disliked-posts.input';

@InputType()
export class UserCreateOrConnectWithoutDislikedPostsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>;

    @Field(() => UserCreateWithoutDislikedPostsInput, {nullable:false})
    @Type(() => UserCreateWithoutDislikedPostsInput)
    create!: UserCreateWithoutDislikedPostsInput;
}
