import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutFlagsInput } from './post-create-without-flags.input';

@InputType()
export class PostCreateOrConnectWithoutFlagsInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostCreateWithoutFlagsInput, {nullable:false})
    @Type(() => PostCreateWithoutFlagsInput)
    create!: PostCreateWithoutFlagsInput;
}
