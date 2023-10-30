import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCountryInput } from './user-create-without-country.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCountryInput } from './user-create-or-connect-without-country.input';
import { UserCreateManyCountryInputEnvelope } from './user-create-many-country-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutCountryInput {

    @Field(() => [UserCreateWithoutCountryInput], {nullable:true})
    @Type(() => UserCreateWithoutCountryInput)
    create?: Array<UserCreateWithoutCountryInput>;

    @Field(() => [UserCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutCountryInput>;

    @Field(() => UserCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyCountryInputEnvelope)
    createMany?: UserCreateManyCountryInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'googleId'>>;
}
