import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagCreateWithoutPostInput } from './flag-create-without-post.input';
import { Type } from 'class-transformer';
import { FlagCreateOrConnectWithoutPostInput } from './flag-create-or-connect-without-post.input';
import { FlagCreateManyPostInputEnvelope } from './flag-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FlagWhereUniqueInput } from './flag-where-unique.input';

@InputType()
export class FlagUncheckedCreateNestedManyWithoutPostInput {

    @Field(() => [FlagCreateWithoutPostInput], {nullable:true})
    @Type(() => FlagCreateWithoutPostInput)
    create?: Array<FlagCreateWithoutPostInput>;

    @Field(() => [FlagCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => FlagCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<FlagCreateOrConnectWithoutPostInput>;

    @Field(() => FlagCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => FlagCreateManyPostInputEnvelope)
    createMany?: FlagCreateManyPostInputEnvelope;

    @Field(() => [FlagWhereUniqueInput], {nullable:true})
    @Type(() => FlagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FlagWhereUniqueInput, 'id'>>;
}
