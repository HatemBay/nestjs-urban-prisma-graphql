import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExampleWhereUniqueInput } from './example-where-unique.input';
import { Type } from 'class-transformer';
import { ExampleCreateWithoutPostInput } from './example-create-without-post.input';

@InputType()
export class ExampleCreateOrConnectWithoutPostInput {

    @Field(() => ExampleWhereUniqueInput, {nullable:false})
    @Type(() => ExampleWhereUniqueInput)
    where!: Prisma.AtLeast<ExampleWhereUniqueInput, 'id'>;

    @Field(() => ExampleCreateWithoutPostInput, {nullable:false})
    @Type(() => ExampleCreateWithoutPostInput)
    create!: ExampleCreateWithoutPostInput;
}
