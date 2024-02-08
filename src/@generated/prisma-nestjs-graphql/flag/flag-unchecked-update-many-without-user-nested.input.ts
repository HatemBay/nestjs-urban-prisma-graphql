import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagCreateWithoutUserInput } from './flag-create-without-user.input';
import { Type } from 'class-transformer';
import { FlagCreateOrConnectWithoutUserInput } from './flag-create-or-connect-without-user.input';
import { FlagUpsertWithWhereUniqueWithoutUserInput } from './flag-upsert-with-where-unique-without-user.input';
import { FlagCreateManyUserInputEnvelope } from './flag-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FlagWhereUniqueInput } from './flag-where-unique.input';
import { FlagUpdateWithWhereUniqueWithoutUserInput } from './flag-update-with-where-unique-without-user.input';
import { FlagUpdateManyWithWhereWithoutUserInput } from './flag-update-many-with-where-without-user.input';
import { FlagScalarWhereInput } from './flag-scalar-where.input';

@InputType()
export class FlagUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [FlagCreateWithoutUserInput], {nullable:true})
    @Type(() => FlagCreateWithoutUserInput)
    create?: Array<FlagCreateWithoutUserInput>;

    @Field(() => [FlagCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FlagCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FlagCreateOrConnectWithoutUserInput>;

    @Field(() => [FlagUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FlagUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<FlagUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => FlagCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FlagCreateManyUserInputEnvelope)
    createMany?: FlagCreateManyUserInputEnvelope;

    @Field(() => [FlagWhereUniqueInput], {nullable:true})
    @Type(() => FlagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FlagWhereUniqueInput, 'id'>>;

    @Field(() => [FlagWhereUniqueInput], {nullable:true})
    @Type(() => FlagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FlagWhereUniqueInput, 'id'>>;

    @Field(() => [FlagWhereUniqueInput], {nullable:true})
    @Type(() => FlagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FlagWhereUniqueInput, 'id'>>;

    @Field(() => [FlagWhereUniqueInput], {nullable:true})
    @Type(() => FlagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FlagWhereUniqueInput, 'id'>>;

    @Field(() => [FlagUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FlagUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<FlagUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [FlagUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => FlagUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<FlagUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [FlagScalarWhereInput], {nullable:true})
    @Type(() => FlagScalarWhereInput)
    deleteMany?: Array<FlagScalarWhereInput>;
}
