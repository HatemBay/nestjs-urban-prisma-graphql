import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateWithoutExampleInput } from './post-update-without-example.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutExampleInput } from './post-create-without-example.input';
import { PostWhereInput } from './post-where.input';

@InputType()
export class PostUpsertWithoutExampleInput {

    @Field(() => PostUpdateWithoutExampleInput, {nullable:false})
    @Type(() => PostUpdateWithoutExampleInput)
    update!: PostUpdateWithoutExampleInput;

    @Field(() => PostCreateWithoutExampleInput, {nullable:false})
    @Type(() => PostCreateWithoutExampleInput)
    create!: PostCreateWithoutExampleInput;

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;
}
