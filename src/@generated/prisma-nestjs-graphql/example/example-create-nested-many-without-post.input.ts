import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExampleCreateWithoutPostInput } from './example-create-without-post.input';
import { Type } from 'class-transformer';
import { ExampleCreateOrConnectWithoutPostInput } from './example-create-or-connect-without-post.input';
import { ExampleCreateManyPostInputEnvelope } from './example-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExampleWhereUniqueInput } from './example-where-unique.input';

@InputType()
export class ExampleCreateNestedManyWithoutPostInput {

    @Field(() => [ExampleCreateWithoutPostInput], {nullable:true})
    @Type(() => ExampleCreateWithoutPostInput)
    create?: Array<ExampleCreateWithoutPostInput>;

    @Field(() => [ExampleCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => ExampleCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<ExampleCreateOrConnectWithoutPostInput>;

    @Field(() => ExampleCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => ExampleCreateManyPostInputEnvelope)
    createMany?: ExampleCreateManyPostInputEnvelope;

    @Field(() => [ExampleWhereUniqueInput], {nullable:true})
    @Type(() => ExampleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExampleWhereUniqueInput, 'id'>>;
}
