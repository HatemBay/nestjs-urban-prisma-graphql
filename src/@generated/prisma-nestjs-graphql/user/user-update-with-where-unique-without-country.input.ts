import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCountryInput } from './user-update-without-country.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutCountryInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'google_id'>;

    @Field(() => UserUpdateWithoutCountryInput, {nullable:false})
    @Type(() => UserUpdateWithoutCountryInput)
    data!: UserUpdateWithoutCountryInput;
}
