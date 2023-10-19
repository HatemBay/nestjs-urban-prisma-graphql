import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CountryCount {

    @Field(() => Int, {nullable:false})
    users?: number;
}
