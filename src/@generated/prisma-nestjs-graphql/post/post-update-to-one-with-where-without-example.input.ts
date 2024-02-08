import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutExampleInput } from './post-update-without-example.input';

@InputType()
export class PostUpdateToOneWithWhereWithoutExampleInput {

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;

    @Field(() => PostUpdateWithoutExampleInput, {nullable:false})
    @Type(() => PostUpdateWithoutExampleInput)
    data!: PostUpdateWithoutExampleInput;
}
