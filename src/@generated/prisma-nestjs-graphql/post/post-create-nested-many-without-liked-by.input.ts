import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutLikedByInput } from './post-create-without-liked-by.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutLikedByInput } from './post-create-or-connect-without-liked-by.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedManyWithoutLikedByInput {

    @Field(() => [PostCreateWithoutLikedByInput], {nullable:true})
    @Type(() => PostCreateWithoutLikedByInput)
    create?: Array<PostCreateWithoutLikedByInput>;

    @Field(() => [PostCreateOrConnectWithoutLikedByInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutLikedByInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutLikedByInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
}
