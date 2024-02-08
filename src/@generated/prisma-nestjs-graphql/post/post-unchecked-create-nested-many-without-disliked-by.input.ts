import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutDislikedByInput } from './post-create-without-disliked-by.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutDislikedByInput } from './post-create-or-connect-without-disliked-by.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUncheckedCreateNestedManyWithoutDislikedByInput {

    @Field(() => [PostCreateWithoutDislikedByInput], {nullable:true})
    @Type(() => PostCreateWithoutDislikedByInput)
    create?: Array<PostCreateWithoutDislikedByInput>;

    @Field(() => [PostCreateOrConnectWithoutDislikedByInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutDislikedByInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutDislikedByInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;
}
