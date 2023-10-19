import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExampleWhereUniqueInput } from './example-where-unique.input';
import { Type } from 'class-transformer';
import { ExampleUpdateWithoutPostInput } from './example-update-without-post.input';

@InputType()
export class ExampleUpdateWithWhereUniqueWithoutPostInput {

    @Field(() => ExampleWhereUniqueInput, {nullable:false})
    @Type(() => ExampleWhereUniqueInput)
    where!: Prisma.AtLeast<ExampleWhereUniqueInput, 'id'>;

    @Field(() => ExampleUpdateWithoutPostInput, {nullable:false})
    @Type(() => ExampleUpdateWithoutPostInput)
    data!: ExampleUpdateWithoutPostInput;
}
