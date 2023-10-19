import { registerEnumType } from '@nestjs/graphql';

export enum CountryScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(CountryScalarFieldEnum, { name: 'CountryScalarFieldEnum', description: undefined })
