import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFlagsInput } from './user-create-without-flags.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFlagsInput } from './user-create-or-connect-without-flags.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFlagsInput {

    @Field(() => UserCreateWithoutFlagsInput, {nullable:true})
    @Type(() => UserCreateWithoutFlagsInput)
    create?: UserCreateWithoutFlagsInput;

    @Field(() => UserCreateOrConnectWithoutFlagsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFlagsInput)
    connectOrCreate?: UserCreateOrConnectWithoutFlagsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>;
}
