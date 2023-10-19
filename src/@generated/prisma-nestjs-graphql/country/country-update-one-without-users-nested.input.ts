import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutUsersInput } from './country-create-without-users.input';
import { Type } from 'class-transformer';
import { CountryCreateOrConnectWithoutUsersInput } from './country-create-or-connect-without-users.input';
import { CountryUpsertWithoutUsersInput } from './country-upsert-without-users.input';
import { CountryWhereInput } from './country-where.input';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryUpdateToOneWithWhereWithoutUsersInput } from './country-update-to-one-with-where-without-users.input';

@InputType()
export class CountryUpdateOneWithoutUsersNestedInput {

    @Field(() => CountryCreateWithoutUsersInput, {nullable:true})
    @Type(() => CountryCreateWithoutUsersInput)
    create?: CountryCreateWithoutUsersInput;

    @Field(() => CountryCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => CountryCreateOrConnectWithoutUsersInput)
    connectOrCreate?: CountryCreateOrConnectWithoutUsersInput;

    @Field(() => CountryUpsertWithoutUsersInput, {nullable:true})
    @Type(() => CountryUpsertWithoutUsersInput)
    upsert?: CountryUpsertWithoutUsersInput;

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    disconnect?: CountryWhereInput;

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    delete?: CountryWhereInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    @Type(() => CountryWhereUniqueInput)
    connect?: Prisma.AtLeast<CountryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => CountryUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => CountryUpdateToOneWithWhereWithoutUsersInput)
    update?: CountryUpdateToOneWithWhereWithoutUsersInput;
}
