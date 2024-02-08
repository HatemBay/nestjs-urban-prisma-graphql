import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutExampleInput } from './post-create-without-example.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutExampleInput } from './post-create-or-connect-without-example.input';
import { PostUpsertWithoutExampleInput } from './post-upsert-without-example.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateToOneWithWhereWithoutExampleInput } from './post-update-to-one-with-where-without-example.input';

@InputType()
export class PostUpdateOneRequiredWithoutExampleNestedInput {

    @Field(() => PostCreateWithoutExampleInput, {nullable:true})
    @Type(() => PostCreateWithoutExampleInput)
    create?: PostCreateWithoutExampleInput;

    @Field(() => PostCreateOrConnectWithoutExampleInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutExampleInput)
    connectOrCreate?: PostCreateOrConnectWithoutExampleInput;

    @Field(() => PostUpsertWithoutExampleInput, {nullable:true})
    @Type(() => PostUpsertWithoutExampleInput)
    upsert?: PostUpsertWithoutExampleInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostUpdateToOneWithWhereWithoutExampleInput, {nullable:true})
    @Type(() => PostUpdateToOneWithWhereWithoutExampleInput)
    update?: PostUpdateToOneWithWhereWithoutExampleInput;
}
