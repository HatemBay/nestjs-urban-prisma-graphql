import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCountryInput } from './user-update-without-country.input';
import { UserCreateWithoutCountryInput } from './user-create-without-country.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutCountryInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>;

    @Field(() => UserUpdateWithoutCountryInput, {nullable:false})
    @Type(() => UserUpdateWithoutCountryInput)
    update!: UserUpdateWithoutCountryInput;

    @Field(() => UserCreateWithoutCountryInput, {nullable:false})
    @Type(() => UserCreateWithoutCountryInput)
    create!: UserCreateWithoutCountryInput;
}
