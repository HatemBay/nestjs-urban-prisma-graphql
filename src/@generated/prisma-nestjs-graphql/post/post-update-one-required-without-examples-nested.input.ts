import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutExamplesInput } from './post-create-without-examples.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutExamplesInput } from './post-create-or-connect-without-examples.input';
import { PostUpsertWithoutExamplesInput } from './post-upsert-without-examples.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateToOneWithWhereWithoutExamplesInput } from './post-update-to-one-with-where-without-examples.input';

@InputType()
export class PostUpdateOneRequiredWithoutExamplesNestedInput {

    @Field(() => PostCreateWithoutExamplesInput, {nullable:true})
    @Type(() => PostCreateWithoutExamplesInput)
    create?: PostCreateWithoutExamplesInput;

    @Field(() => PostCreateOrConnectWithoutExamplesInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutExamplesInput)
    connectOrCreate?: PostCreateOrConnectWithoutExamplesInput;

    @Field(() => PostUpsertWithoutExamplesInput, {nullable:true})
    @Type(() => PostUpsertWithoutExamplesInput)
    upsert?: PostUpsertWithoutExamplesInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostUpdateToOneWithWhereWithoutExamplesInput, {nullable:true})
    @Type(() => PostUpdateToOneWithWhereWithoutExamplesInput)
    update?: PostUpdateToOneWithWhereWithoutExamplesInput;
}
