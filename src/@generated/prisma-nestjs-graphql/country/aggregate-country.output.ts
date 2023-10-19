import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CountryCountAggregate } from './country-count-aggregate.output';
import { CountryAvgAggregate } from './country-avg-aggregate.output';
import { CountrySumAggregate } from './country-sum-aggregate.output';
import { CountryMinAggregate } from './country-min-aggregate.output';
import { CountryMaxAggregate } from './country-max-aggregate.output';

@ObjectType()
export class AggregateCountry {

    @Field(() => CountryCountAggregate, {nullable:true})
    _count?: CountryCountAggregate;

    @Field(() => CountryAvgAggregate, {nullable:true})
    _avg?: CountryAvgAggregate;

    @Field(() => CountrySumAggregate, {nullable:true})
    _sum?: CountrySumAggregate;

    @Field(() => CountryMinAggregate, {nullable:true})
    _min?: CountryMinAggregate;

    @Field(() => CountryMaxAggregate, {nullable:true})
    _max?: CountryMaxAggregate;
}
