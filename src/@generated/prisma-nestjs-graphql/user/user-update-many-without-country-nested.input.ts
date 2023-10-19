import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCountryInput } from './user-create-without-country.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCountryInput } from './user-create-or-connect-without-country.input';
import { UserUpsertWithWhereUniqueWithoutCountryInput } from './user-upsert-with-where-unique-without-country.input';
import { UserCreateManyCountryInputEnvelope } from './user-create-many-country-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutCountryInput } from './user-update-with-where-unique-without-country.input';
import { UserUpdateManyWithWhereWithoutCountryInput } from './user-update-many-with-where-without-country.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutCountryNestedInput {

    @Field(() => [UserCreateWithoutCountryInput], {nullable:true})
    @Type(() => UserCreateWithoutCountryInput)
    create?: Array<UserCreateWithoutCountryInput>;

    @Field(() => [UserCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutCountryInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutCountryInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutCountryInput>;

    @Field(() => UserCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyCountryInputEnvelope)
    createMany?: UserCreateManyCountryInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'google_id'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'google_id'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'google_id'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email' | 'google_id'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutCountryInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutCountryInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutCountryInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutCountryInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
