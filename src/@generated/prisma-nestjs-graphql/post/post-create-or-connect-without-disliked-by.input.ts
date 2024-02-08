import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutDislikedByInput } from './post-create-without-disliked-by.input';

@InputType()
export class PostCreateOrConnectWithoutDislikedByInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostCreateWithoutDislikedByInput, {nullable:false})
    @Type(() => PostCreateWithoutDislikedByInput)
    create!: PostCreateWithoutDislikedByInput;
}
