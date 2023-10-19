import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Post } from '../post/post.model';

@ObjectType()
export class Example {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    post_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Post, {nullable:false})
    post?: Post;
}
