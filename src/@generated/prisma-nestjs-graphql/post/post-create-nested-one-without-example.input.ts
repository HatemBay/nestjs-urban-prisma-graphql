import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutExampleInput } from './post-create-without-example.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutExampleInput } from './post-create-or-connect-without-example.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedOneWithoutExampleInput {

    @Field(() => PostCreateWithoutExampleInput, {nullable:true})
    @Type(() => PostCreateWithoutExampleInput)
    create?: PostCreateWithoutExampleInput;

    @Field(() => PostCreateOrConnectWithoutExampleInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutExampleInput)
    connectOrCreate?: PostCreateOrConnectWithoutExampleInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
