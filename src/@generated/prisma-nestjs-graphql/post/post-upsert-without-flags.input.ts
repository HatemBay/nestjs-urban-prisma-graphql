import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateWithoutFlagsInput } from './post-update-without-flags.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutFlagsInput } from './post-create-without-flags.input';
import { PostWhereInput } from './post-where.input';

@InputType()
export class PostUpsertWithoutFlagsInput {

    @Field(() => PostUpdateWithoutFlagsInput, {nullable:false})
    @Type(() => PostUpdateWithoutFlagsInput)
    update!: PostUpdateWithoutFlagsInput;

    @Field(() => PostCreateWithoutFlagsInput, {nullable:false})
    @Type(() => PostCreateWithoutFlagsInput)
    create!: PostCreateWithoutFlagsInput;

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;
}
