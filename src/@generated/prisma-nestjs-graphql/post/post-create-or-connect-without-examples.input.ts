import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutExamplesInput } from './post-create-without-examples.input';

@InputType()
export class PostCreateOrConnectWithoutExamplesInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostCreateWithoutExamplesInput, {nullable:false})
    @Type(() => PostCreateWithoutExamplesInput)
    create!: PostCreateWithoutExamplesInput;
}
