import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExampleCreateWithoutPostInput } from './example-create-without-post.input';
import { Type } from 'class-transformer';
import { ExampleCreateOrConnectWithoutPostInput } from './example-create-or-connect-without-post.input';
import { Prisma } from '@prisma/client';
import { ExampleWhereUniqueInput } from './example-where-unique.input';

@InputType()
export class ExampleCreateNestedOneWithoutPostInput {

    @Field(() => ExampleCreateWithoutPostInput, {nullable:true})
    @Type(() => ExampleCreateWithoutPostInput)
    create?: ExampleCreateWithoutPostInput;

    @Field(() => ExampleCreateOrConnectWithoutPostInput, {nullable:true})
    @Type(() => ExampleCreateOrConnectWithoutPostInput)
    connectOrCreate?: ExampleCreateOrConnectWithoutPostInput;

    @Field(() => ExampleWhereUniqueInput, {nullable:true})
    @Type(() => ExampleWhereUniqueInput)
    connect?: Prisma.AtLeast<ExampleWhereUniqueInput, 'id' | 'postId'>;
}
