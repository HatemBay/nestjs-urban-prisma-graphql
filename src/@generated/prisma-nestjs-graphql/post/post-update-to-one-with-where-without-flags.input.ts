import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutFlagsInput } from './post-update-without-flags.input';

@InputType()
export class PostUpdateToOneWithWhereWithoutFlagsInput {

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;

    @Field(() => PostUpdateWithoutFlagsInput, {nullable:false})
    @Type(() => PostUpdateWithoutFlagsInput)
    data!: PostUpdateWithoutFlagsInput;
}
