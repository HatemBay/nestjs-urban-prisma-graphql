import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutLikedByInput } from './post-create-without-liked-by.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutLikedByInput } from './post-create-or-connect-without-liked-by.input';
import { PostUpsertWithWhereUniqueWithoutLikedByInput } from './post-upsert-with-where-unique-without-liked-by.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithWhereUniqueWithoutLikedByInput } from './post-update-with-where-unique-without-liked-by.input';
import { PostUpdateManyWithWhereWithoutLikedByInput } from './post-update-many-with-where-without-liked-by.input';
import { PostScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class PostUpdateManyWithoutLikedByNestedInput {

    @Field(() => [PostCreateWithoutLikedByInput], {nullable:true})
    @Type(() => PostCreateWithoutLikedByInput)
    create?: Array<PostCreateWithoutLikedByInput>;

    @Field(() => [PostCreateOrConnectWithoutLikedByInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutLikedByInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutLikedByInput>;

    @Field(() => [PostUpsertWithWhereUniqueWithoutLikedByInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutLikedByInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutLikedByInput>;

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

    @Field(() => [PostUpdateWithWhereUniqueWithoutLikedByInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutLikedByInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutLikedByInput>;

    @Field(() => [PostUpdateManyWithWhereWithoutLikedByInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutLikedByInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutLikedByInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}
