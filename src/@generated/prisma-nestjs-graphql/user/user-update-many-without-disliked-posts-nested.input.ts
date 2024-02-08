import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDislikedPostsInput } from './user-create-without-disliked-posts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDislikedPostsInput } from './user-create-or-connect-without-disliked-posts.input';
import { UserUpsertWithWhereUniqueWithoutDislikedPostsInput } from './user-upsert-with-where-unique-without-disliked-posts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutDislikedPostsInput } from './user-update-with-where-unique-without-disliked-posts.input';
import { UserUpdateManyWithWhereWithoutDislikedPostsInput } from './user-update-many-with-where-without-disliked-posts.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutDislikedPostsNestedInput {

    @Field(() => [UserCreateWithoutDislikedPostsInput], {nullable:true})
    @Type(() => UserCreateWithoutDislikedPostsInput)
    create?: Array<UserCreateWithoutDislikedPostsInput>;

    @Field(() => [UserCreateOrConnectWithoutDislikedPostsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDislikedPostsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutDislikedPostsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutDislikedPostsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutDislikedPostsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutDislikedPostsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutDislikedPostsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutDislikedPostsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutDislikedPostsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutDislikedPostsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutDislikedPostsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutDislikedPostsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
