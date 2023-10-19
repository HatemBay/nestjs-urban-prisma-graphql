import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutUsersInput } from './country-create-without-users.input';
import { Type } from 'class-transformer';
import { CountryCreateOrConnectWithoutUsersInput } from './country-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';

@InputType()
export class CountryCreateNestedOneWithoutUsersInput {

    @Field(() => CountryCreateWithoutUsersInput, {nullable:true})
    @Type(() => CountryCreateWithoutUsersInput)
    create?: CountryCreateWithoutUsersInput;

    @Field(() => CountryCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => CountryCreateOrConnectWithoutUsersInput)
    connectOrCreate?: CountryCreateOrConnectWithoutUsersInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    @Type(() => CountryWhereUniqueInput)
    connect?: Prisma.AtLeast<CountryWhereUniqueInput, 'id' | 'name'>;
}
