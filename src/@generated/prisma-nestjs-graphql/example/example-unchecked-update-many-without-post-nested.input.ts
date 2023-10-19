import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExampleCreateWithoutPostInput } from './example-create-without-post.input';
import { Type } from 'class-transformer';
import { ExampleCreateOrConnectWithoutPostInput } from './example-create-or-connect-without-post.input';
import { ExampleUpsertWithWhereUniqueWithoutPostInput } from './example-upsert-with-where-unique-without-post.input';
import { ExampleCreateManyPostInputEnvelope } from './example-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ExampleWhereUniqueInput } from './example-where-unique.input';
import { ExampleUpdateWithWhereUniqueWithoutPostInput } from './example-update-with-where-unique-without-post.input';
import { ExampleUpdateManyWithWhereWithoutPostInput } from './example-update-many-with-where-without-post.input';
import { ExampleScalarWhereInput } from './example-scalar-where.input';

@InputType()
export class ExampleUncheckedUpdateManyWithoutPostNestedInput {

    @Field(() => [ExampleCreateWithoutPostInput], {nullable:true})
    @Type(() => ExampleCreateWithoutPostInput)
    create?: Array<ExampleCreateWithoutPostInput>;

    @Field(() => [ExampleCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => ExampleCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<ExampleCreateOrConnectWithoutPostInput>;

    @Field(() => [ExampleUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => ExampleUpsertWithWhereUniqueWithoutPostInput)
    upsert?: Array<ExampleUpsertWithWhereUniqueWithoutPostInput>;

    @Field(() => ExampleCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => ExampleCreateManyPostInputEnvelope)
    createMany?: ExampleCreateManyPostInputEnvelope;

    @Field(() => [ExampleWhereUniqueInput], {nullable:true})
    @Type(() => ExampleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ExampleWhereUniqueInput, 'id'>>;

    @Field(() => [ExampleWhereUniqueInput], {nullable:true})
    @Type(() => ExampleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ExampleWhereUniqueInput, 'id'>>;

    @Field(() => [ExampleWhereUniqueInput], {nullable:true})
    @Type(() => ExampleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ExampleWhereUniqueInput, 'id'>>;

    @Field(() => [ExampleWhereUniqueInput], {nullable:true})
    @Type(() => ExampleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ExampleWhereUniqueInput, 'id'>>;

    @Field(() => [ExampleUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => ExampleUpdateWithWhereUniqueWithoutPostInput)
    update?: Array<ExampleUpdateWithWhereUniqueWithoutPostInput>;

    @Field(() => [ExampleUpdateManyWithWhereWithoutPostInput], {nullable:true})
    @Type(() => ExampleUpdateManyWithWhereWithoutPostInput)
    updateMany?: Array<ExampleUpdateManyWithWhereWithoutPostInput>;

    @Field(() => [ExampleScalarWhereInput], {nullable:true})
    @Type(() => ExampleScalarWhereInput)
    deleteMany?: Array<ExampleScalarWhereInput>;
}
