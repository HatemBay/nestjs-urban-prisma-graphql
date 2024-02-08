import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFlagsInput } from './user-create-without-flags.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFlagsInput } from './user-create-or-connect-without-flags.input';
import { UserUpsertWithoutFlagsInput } from './user-upsert-without-flags.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFlagsInput } from './user-update-to-one-with-where-without-flags.input';

@InputType()
export class UserUpdateOneWithoutFlagsNestedInput {

    @Field(() => UserCreateWithoutFlagsInput, {nullable:true})
    @Type(() => UserCreateWithoutFlagsInput)
    create?: UserCreateWithoutFlagsInput;

    @Field(() => UserCreateOrConnectWithoutFlagsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFlagsInput)
    connectOrCreate?: UserCreateOrConnectWithoutFlagsInput;

    @Field(() => UserUpsertWithoutFlagsInput, {nullable:true})
    @Type(() => UserUpsertWithoutFlagsInput)
    upsert?: UserUpsertWithoutFlagsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFlagsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFlagsInput)
    update?: UserUpdateToOneWithWhereWithoutFlagsInput;
}
