import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDislikedPostsInput } from './user-create-without-disliked-posts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDislikedPostsInput } from './user-create-or-connect-without-disliked-posts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutDislikedPostsInput {

    @Field(() => [UserCreateWithoutDislikedPostsInput], {nullable:true})
    @Type(() => UserCreateWithoutDislikedPostsInput)
    create?: Array<UserCreateWithoutDislikedPostsInput>;

    @Field(() => [UserCreateOrConnectWithoutDislikedPostsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDislikedPostsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutDislikedPostsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>>;
}
