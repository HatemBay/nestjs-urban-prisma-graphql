import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FlagWhereUniqueInput } from './flag-where-unique.input';
import { Type } from 'class-transformer';
import { FlagCreateWithoutPostInput } from './flag-create-without-post.input';

@InputType()
export class FlagCreateOrConnectWithoutPostInput {

    @Field(() => FlagWhereUniqueInput, {nullable:false})
    @Type(() => FlagWhereUniqueInput)
    where!: Prisma.AtLeast<FlagWhereUniqueInput, 'id'>;

    @Field(() => FlagCreateWithoutPostInput, {nullable:false})
    @Type(() => FlagCreateWithoutPostInput)
    create!: FlagCreateWithoutPostInput;
}
