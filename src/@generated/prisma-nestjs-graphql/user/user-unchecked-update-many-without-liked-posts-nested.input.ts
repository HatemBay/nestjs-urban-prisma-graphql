import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLikedPostsInput } from './user-create-without-liked-posts.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLikedPostsInput } from './user-create-or-connect-without-liked-posts.input';
import { UserUpsertWithWhereUniqueWithoutLikedPostsInput } from './user-upsert-with-where-unique-without-liked-posts.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutLikedPostsInput } from './user-update-with-where-unique-without-liked-posts.input';
import { UserUpdateManyWithWhereWithoutLikedPostsInput } from './user-update-many-with-where-without-liked-posts.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutLikedPostsNestedInput {

    @Field(() => [UserCreateWithoutLikedPostsInput], {nullable:true})
    @Type(() => UserCreateWithoutLikedPostsInput)
    create?: Array<UserCreateWithoutLikedPostsInput>;

    @Field(() => [UserCreateOrConnectWithoutLikedPostsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLikedPostsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutLikedPostsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutLikedPostsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutLikedPostsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutLikedPostsInput>;

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

    @Field(() => [UserUpdateWithWhereUniqueWithoutLikedPostsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutLikedPostsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutLikedPostsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutLikedPostsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutLikedPostsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutLikedPostsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
