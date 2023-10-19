import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Example } from '../example/example.model';
import { PostCount } from './post-count.output';

@ObjectType()
export class Post {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    published!: boolean | null;

    @Field(() => Int, {nullable:false,defaultValue:1})
    likes_count!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    dislikes_count!: number;

    @Field(() => Int, {nullable:false})
    author_id!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    is_u_18!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => [Example], {nullable:true})
    examples?: Array<Example>;

    @Field(() => PostCount, {nullable:false})
    _count?: PostCount;
}
