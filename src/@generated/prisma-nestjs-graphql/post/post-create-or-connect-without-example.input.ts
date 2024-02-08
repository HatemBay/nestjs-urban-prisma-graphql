import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutExampleInput } from './post-create-without-example.input';

@InputType()
export class PostCreateOrConnectWithoutExampleInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostCreateWithoutExampleInput, {nullable:false})
    @Type(() => PostCreateWithoutExampleInput)
    create!: PostCreateWithoutExampleInput;
}
