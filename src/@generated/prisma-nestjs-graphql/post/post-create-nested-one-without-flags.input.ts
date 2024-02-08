import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutFlagsInput } from './post-create-without-flags.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutFlagsInput } from './post-create-or-connect-without-flags.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedOneWithoutFlagsInput {

    @Field(() => PostCreateWithoutFlagsInput, {nullable:true})
    @Type(() => PostCreateWithoutFlagsInput)
    create?: PostCreateWithoutFlagsInput;

    @Field(() => PostCreateOrConnectWithoutFlagsInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutFlagsInput)
    connectOrCreate?: PostCreateOrConnectWithoutFlagsInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
