import { registerEnumType } from '@nestjs/graphql';

export enum Tag {
    SAFE = "SAFE",
    UNSAFE = "UNSAFE"
}


registerEnumType(Tag, { name: 'Tag', description: undefined })
