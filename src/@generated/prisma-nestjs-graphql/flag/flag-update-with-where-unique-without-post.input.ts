import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FlagWhereUniqueInput } from './flag-where-unique.input';
import { Type } from 'class-transformer';
import { FlagUpdateWithoutPostInput } from './flag-update-without-post.input';

@InputType()
export class FlagUpdateWithWhereUniqueWithoutPostInput {

    @Field(() => FlagWhereUniqueInput, {nullable:false})
    @Type(() => FlagWhereUniqueInput)
    where!: Prisma.AtLeast<FlagWhereUniqueInput, 'id'>;

    @Field(() => FlagUpdateWithoutPostInput, {nullable:false})
    @Type(() => FlagUpdateWithoutPostInput)
    data!: FlagUpdateWithoutPostInput;
}
