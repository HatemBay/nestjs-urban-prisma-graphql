import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExampleCreateWithoutPostInput } from './example-create-without-post.input';
import { Type } from 'class-transformer';
import { ExampleCreateOrConnectWithoutPostInput } from './example-create-or-connect-without-post.input';
import { ExampleUpsertWithoutPostInput } from './example-upsert-without-post.input';
import { ExampleWhereInput } from './example-where.input';
import { Prisma } from '@prisma/client';
import { ExampleWhereUniqueInput } from './example-where-unique.input';
import { ExampleUpdateToOneWithWhereWithoutPostInput } from './example-update-to-one-with-where-without-post.input';

@InputType()
export class ExampleUncheckedUpdateOneWithoutPostNestedInput {

    @Field(() => ExampleCreateWithoutPostInput, {nullable:true})
    @Type(() => ExampleCreateWithoutPostInput)
    create?: ExampleCreateWithoutPostInput;

    @Field(() => ExampleCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => ExampleCreateOrConnectWithoutPostInput)
    connectOrCreate?: ExampleCreateOrConnectWithoutPostInput;

    @Field(() => ExampleUpsertWithoutPostInput, {nullable:true})
    @Type(() => ExampleUpsertWithoutPostInput)
    upsert?: ExampleUpsertWithoutPostInput;

    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    disconnect?: ExampleWhereInput;

    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    delete?: ExampleWhereInput;

    @Field(() => ExampleWhereUniqueInput, {nullable:true})
    @Type(() => ExampleWhereUniqueInput)
    connect?: Prisma.AtLeast<ExampleWhereUniqueInput, 'id' | 'postId'>;

    @Field(() => ExampleUpdateToOneWithWhereWithoutPostInput, {nullable:true})
    @Type(() => ExampleUpdateToOneWithWhereWithoutPostInput)
    update?: ExampleUpdateToOneWithWhereWithoutPostInput;
}
