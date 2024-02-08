import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutLikedByInput } from './post-update-without-liked-by.input';

@InputType()
export class PostUpdateWithWhereUniqueWithoutLikedByInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostUpdateWithoutLikedByInput, {nullable:false})
    @Type(() => PostUpdateWithoutLikedByInput)
    data!: PostUpdateWithoutLikedByInput;
}
