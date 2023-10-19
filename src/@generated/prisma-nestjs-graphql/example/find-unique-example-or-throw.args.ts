import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ExampleWhereUniqueInput } from './example-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueExampleOrThrowArgs {

    @Field(() => ExampleWhereUniqueInput, {nullable:false})
    @Type(() => ExampleWhereUniqueInput)
    where!: Prisma.AtLeast<ExampleWhereUniqueInput, 'id'>;
}
