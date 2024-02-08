import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutFlagsInput } from './post-create-without-flags.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutFlagsInput } from './post-create-or-connect-without-flags.input';
import { PostUpsertWithoutFlagsInput } from './post-upsert-without-flags.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateToOneWithWhereWithoutFlagsInput } from './post-update-to-one-with-where-without-flags.input';

@InputType()
export class PostUpdateOneRequiredWithoutFlagsNestedInput {

    @Field(() => PostCreateWithoutFlagsInput, {nullable:true})
    @Type(() => PostCreateWithoutFlagsInput)
    create?: PostCreateWithoutFlagsInput;

    @Field(() => PostCreateOrConnectWithoutFlagsInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutFlagsInput)
    connectOrCreate?: PostCreateOrConnectWithoutFlagsInput;

    @Field(() => PostUpsertWithoutFlagsInput, {nullable:true})
    @Type(() => PostUpsertWithoutFlagsInput)
    upsert?: PostUpsertWithoutFlagsInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostUpdateToOneWithWhereWithoutFlagsInput, {nullable:true})
    @Type(() => PostUpdateToOneWithWhereWithoutFlagsInput)
    update?: PostUpdateToOneWithWhereWithoutFlagsInput;
}
