import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FlagWhereUniqueInput } from './flag-where-unique.input';
import { Type } from 'class-transformer';
import { FlagUpdateWithoutUserInput } from './flag-update-without-user.input';

@InputType()
export class FlagUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => FlagWhereUniqueInput, {nullable:false})
    @Type(() => FlagWhereUniqueInput)
    where!: Prisma.AtLeast<FlagWhereUniqueInput, 'id'>;

    @Field(() => FlagUpdateWithoutUserInput, {nullable:false})
    @Type(() => FlagUpdateWithoutUserInput)
    data!: FlagUpdateWithoutUserInput;
}
