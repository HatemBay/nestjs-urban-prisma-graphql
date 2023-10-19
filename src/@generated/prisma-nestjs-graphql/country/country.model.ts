import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { CountryCount } from './country-count.output';

@ObjectType()
export class Country {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => CountryCount, {nullable:false})
    _count?: CountryCount;
}
