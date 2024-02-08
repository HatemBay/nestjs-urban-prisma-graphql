import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagCreateWithoutUserInput } from './flag-create-without-user.input';
import { Type } from 'class-transformer';
import { FlagCreateOrConnectWithoutUserInput } from './flag-create-or-connect-without-user.input';
import { FlagCreateManyUserInputEnvelope } from './flag-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FlagWhereUniqueInput } from './flag-where-unique.input';

@InputType()
export class FlagCreateNestedManyWithoutUserInput {

    @Field(() => [FlagCreateWithoutUserInput], {nullable:true})
    @Type(() => FlagCreateWithoutUserInput)
    create?: Array<FlagCreateWithoutUserInput>;

    @Field(() => [FlagCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FlagCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FlagCreateOrConnectWithoutUserInput>;

    @Field(() => FlagCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FlagCreateManyUserInputEnvelope)
    createMany?: FlagCreateManyUserInputEnvelope;

    @Field(() => [FlagWhereUniqueInput], {nullable:true})
    @Type(() => FlagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FlagWhereUniqueInput, 'id'>>;
}
