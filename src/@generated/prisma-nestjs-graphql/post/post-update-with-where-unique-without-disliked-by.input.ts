import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutDislikedByInput } from './post-update-without-disliked-by.input';

@InputType()
export class PostUpdateWithWhereUniqueWithoutDislikedByInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostUpdateWithoutDislikedByInput, {nullable:false})
    @Type(() => PostUpdateWithoutDislikedByInput)
    data!: PostUpdateWithoutDislikedByInput;
}
