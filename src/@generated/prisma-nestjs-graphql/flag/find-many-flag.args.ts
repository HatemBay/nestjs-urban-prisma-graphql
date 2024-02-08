import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlagWhereInput } from './flag-where.input';
import { Type } from 'class-transformer';
import { FlagOrderByWithRelationInput } from './flag-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FlagWhereUniqueInput } from './flag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FlagScalarFieldEnum } from './flag-scalar-field.enum';

@ArgsType()
export class FindManyFlagArgs {

    @Field(() => FlagWhereInput, {nullable:true})
    @Type(() => FlagWhereInput)
    where?: FlagWhereInput;

    @Field(() => [FlagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FlagOrderByWithRelationInput>;

    @Field(() => FlagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FlagWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FlagScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FlagScalarFieldEnum>;
}
