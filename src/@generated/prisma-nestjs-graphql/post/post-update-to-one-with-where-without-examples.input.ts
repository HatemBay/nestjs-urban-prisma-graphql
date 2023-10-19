import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutExamplesInput } from './post-update-without-examples.input';

@InputType()
export class PostUpdateToOneWithWhereWithoutExamplesInput {

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;

    @Field(() => PostUpdateWithoutExamplesInput, {nullable:false})
    @Type(() => PostUpdateWithoutExamplesInput)
    data!: PostUpdateWithoutExamplesInput;
}
