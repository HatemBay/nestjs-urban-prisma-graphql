import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLikedPostsInput } from './user-create-without-liked-posts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLikedPostsInput } from './user-create-or-connect-without-liked-posts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutLikedPostsInput {

    @Field(() => [UserCreateWithoutLikedPostsInput], {nullable:true})
    @Type(() => UserCreateWithoutLikedPostsInput)
    create?: Array<UserCreateWithoutLikedPostsInput>;

    @Field(() => [UserCreateOrConnectWithoutLikedPostsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLikedPostsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutLikedPostsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>>;
}
