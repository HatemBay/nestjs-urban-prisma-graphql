import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { Type } from 'class-transformer';
import { CountryCreateWithoutUsersInput } from './country-create-without-users.input';

@InputType()
export class CountryCreateOrConnectWithoutUsersInput {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    where!: Prisma.AtLeast<CountryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => CountryCreateWithoutUsersInput, {nullable:false})
    @Type(() => CountryCreateWithoutUsersInput)
    create!: CountryCreateWithoutUsersInput;
}
