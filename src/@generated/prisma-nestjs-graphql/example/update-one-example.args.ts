import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExampleUpdateInput } from './example-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ExampleWhereUniqueInput } from './example-where-unique.input';

@ArgsType()
export class UpdateOneExampleArgs {

    @Field(() => ExampleUpdateInput, {nullable:false})
    @Type(() => ExampleUpdateInput)
    data!: ExampleUpdateInput;

    @Field(() => ExampleWhereUniqueInput, {nullable:false})
    @Type(() => ExampleWhereUniqueInput)
    where!: Prisma.AtLeast<ExampleWhereUniqueInput, 'id' | 'postId'>;
}
