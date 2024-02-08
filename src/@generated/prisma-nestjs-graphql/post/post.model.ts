import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Flag } from '../flag/flag.model';
import { Example } from '../example/example.model';
import { PostCount } from './post-count.output';

@ObjectType()
export class Post {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    titleArabic!: string;

    @Field(() => String, {nullable:false})
    titleLatin!: string;

    @Field(() => String, {nullable:false})
    contentArabic!: string;

    @Field(() => String, {nullable:false})
    contentEnglish!: string;

    @Field(() => String, {nullable:false})
    contentFrench!: string;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    published!: boolean | null;

    @Field(() => Int, {nullable:false,defaultValue:1})
    likesCount!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    dislikesCount!: number;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isU18!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => [Flag], {nullable:true})
    flags?: Array<Flag>;

    @Field(() => Example, {nullable:true})
    example?: Example | null;

    @Field(() => [User], {nullable:true})
    likedBy?: Array<User>;

    @Field(() => [User], {nullable:true})
    dislikedBy?: Array<User>;

    @Field(() => PostCount, {nullable:false})
    _count?: PostCount;
}
