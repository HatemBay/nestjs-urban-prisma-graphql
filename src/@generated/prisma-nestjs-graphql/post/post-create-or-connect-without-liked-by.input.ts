import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutLikedByInput } from './post-create-without-liked-by.input';

@InputType()
export class PostCreateOrConnectWithoutLikedByInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostCreateWithoutLikedByInput, {nullable:false})
    @Type(() => PostCreateWithoutLikedByInput)
    create!: PostCreateWithoutLikedByInput;
}
