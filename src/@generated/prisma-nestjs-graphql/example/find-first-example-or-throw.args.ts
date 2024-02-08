import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExampleWhereInput } from './example-where.input';
import { Type } from 'class-transformer';
import { ExampleOrderByWithRelationInput } from './example-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ExampleWhereUniqueInput } from './example-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ExampleScalarFieldEnum } from './example-scalar-field.enum';

@ArgsType()
export class FindFirstExampleOrThrowArgs {

    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    where?: ExampleWhereInput;

    @Field(() => [ExampleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ExampleOrderByWithRelationInput>;

    @Field(() => ExampleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ExampleWhereUniqueInput, 'id' | 'postId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ExampleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ExampleScalarFieldEnum>;
}
