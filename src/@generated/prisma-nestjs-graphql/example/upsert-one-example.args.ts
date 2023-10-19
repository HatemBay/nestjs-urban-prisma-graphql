import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExampleWhereUniqueInput } from './example-where-unique.input';
import { Type } from 'class-transformer';
import { ExampleCreateInput } from './example-create.input';
import { ExampleUpdateInput } from './example-update.input';

@ArgsType()
export class UpsertOneExampleArgs {

    @Field(() => ExampleWhereUniqueInput, {nullable:false})
    @Type(() => ExampleWhereUniqueInput)
    where!: Prisma.AtLeast<ExampleWhereUniqueInput, 'id'>;

    @Field(() => ExampleCreateInput, {nullable:false})
    @Type(() => ExampleCreateInput)
    create!: ExampleCreateInput;

    @Field(() => ExampleUpdateInput, {nullable:false})
    @Type(() => ExampleUpdateInput)
    update!: ExampleUpdateInput;
}
