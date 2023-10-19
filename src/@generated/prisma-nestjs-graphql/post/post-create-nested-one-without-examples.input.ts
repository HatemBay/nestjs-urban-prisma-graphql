import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutExamplesInput } from './post-create-without-examples.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutExamplesInput } from './post-create-or-connect-without-examples.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedOneWithoutExamplesInput {

    @Field(() => PostCreateWithoutExamplesInput, {nullable:true})
    @Type(() => PostCreateWithoutExamplesInput)
    create?: PostCreateWithoutExamplesInput;

    @Field(() => PostCreateOrConnectWithoutExamplesInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutExamplesInput)
    connectOrCreate?: PostCreateOrConnectWithoutExamplesInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
