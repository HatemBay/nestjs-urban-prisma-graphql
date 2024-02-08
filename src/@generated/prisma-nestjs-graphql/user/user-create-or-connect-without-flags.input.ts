import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFlagsInput } from './user-create-without-flags.input';

@InputType()
export class UserCreateOrConnectWithoutFlagsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>;

    @Field(() => UserCreateWithoutFlagsInput, {nullable:false})
    @Type(() => UserCreateWithoutFlagsInput)
    create!: UserCreateWithoutFlagsInput;
}
