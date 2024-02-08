import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagCreateWithoutPostInput } from './flag-create-without-post.input';
import { Type } from 'class-transformer';
import { FlagCreateOrConnectWithoutPostInput } from './flag-create-or-connect-without-post.input';
import { FlagUpsertWithWhereUniqueWithoutPostInput } from './flag-upsert-with-where-unique-without-post.input';
import { FlagCreateManyPostInputEnvelope } from './flag-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FlagWhereUniqueInput } from './flag-where-unique.input';
import { FlagUpdateWithWhereUniqueWithoutPostInput } from './flag-update-with-where-unique-without-post.input';
import { FlagUpdateManyWithWhereWithoutPostInput } from './flag-update-many-with-where-without-post.input';
import { FlagScalarWhereInput } from './flag-scalar-where.input';

@InputType()
export class FlagUpdateManyWithoutPostNestedInput {

    @Field(() => [FlagCreateWithoutPostInput], {nullable:true})
    @Type(() => FlagCreateWithoutPostInput)
    create?: Array<FlagCreateWithoutPostInput>;

    @Field(() => [FlagCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => FlagCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<FlagCreateOrConnectWithoutPostInput>;

    @Field(() => [FlagUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => FlagUpsertWithWhereUniqueWithoutPostInput)
    upsert?: Array<FlagUpsertWithWhereUniqueWithoutPostInput>;

    @Field(() => FlagCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => FlagCreateManyPostInputEnvelope)
    createMany?: FlagCreateManyPostInputEnvelope;

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

    @Field(() => [FlagUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => FlagUpdateWithWhereUniqueWithoutPostInput)
    update?: Array<FlagUpdateWithWhereUniqueWithoutPostInput>;

    @Field(() => [FlagUpdateManyWithWhereWithoutPostInput], {nullable:true})
    @Type(() => FlagUpdateManyWithWhereWithoutPostInput)
    updateMany?: Array<FlagUpdateManyWithWhereWithoutPostInput>;

    @Field(() => [FlagScalarWhereInput], {nullable:true})
    @Type(() => FlagScalarWhereInput)
    deleteMany?: Array<FlagScalarWhereInput>;
}
