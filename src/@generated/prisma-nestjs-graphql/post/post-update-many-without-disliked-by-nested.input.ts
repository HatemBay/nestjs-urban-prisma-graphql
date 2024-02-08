import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutDislikedByInput } from './post-create-without-disliked-by.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutDislikedByInput } from './post-create-or-connect-without-disliked-by.input';
import { PostUpsertWithWhereUniqueWithoutDislikedByInput } from './post-upsert-with-where-unique-without-disliked-by.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithWhereUniqueWithoutDislikedByInput } from './post-update-with-where-unique-without-disliked-by.input';
import { PostUpdateManyWithWhereWithoutDislikedByInput } from './post-update-many-with-where-without-disliked-by.input';
import { PostScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class PostUpdateManyWithoutDislikedByNestedInput {

    @Field(() => [PostCreateWithoutDislikedByInput], {nullable:true})
    @Type(() => PostCreateWithoutDislikedByInput)
    create?: Array<PostCreateWithoutDislikedByInput>;

    @Field(() => [PostCreateOrConnectWithoutDislikedByInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutDislikedByInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutDislikedByInput>;

    @Field(() => [PostUpsertWithWhereUniqueWithoutDislikedByInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutDislikedByInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutDislikedByInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id'>>;

    @Field(() => [PostUpdateWithWhereUniqueWithoutDislikedByInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutDislikedByInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutDislikedByInput>;

    @Field(() => [PostUpdateManyWithWhereWithoutDislikedByInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutDislikedByInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutDislikedByInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}
