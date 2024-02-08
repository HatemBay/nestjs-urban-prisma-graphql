import { registerEnumType } from '@nestjs/graphql';

export enum Reason {
    PRIVATE = "PRIVATE",
    OFFENSIVE = "OFFENSIVE",
    TABOO = "TABOO",
    OTHER = "OTHER"
}


registerEnumType(Reason, { name: 'Reason', description: undefined })
