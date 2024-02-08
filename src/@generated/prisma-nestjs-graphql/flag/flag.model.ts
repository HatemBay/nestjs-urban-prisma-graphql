import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Reason } from '../prisma/reason.enum';
import { Int } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { User } from '../user/user.model';

@ObjectType()
export class Flag {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Reason, {nullable:false})
    reason!: keyof typeof Reason;

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => Int, {nullable:false})
    postId!: number;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Post, {nullable:false})
    Post?: Post;

    @Field(() => User, {nullable:true})
    User?: User | null;
}
