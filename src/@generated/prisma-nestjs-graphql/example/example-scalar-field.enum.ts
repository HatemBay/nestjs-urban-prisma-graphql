import { registerEnumType } from '@nestjs/graphql';

export enum ExampleScalarFieldEnum {
    id = "id",
    content = "content",
    postId = "postId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ExampleScalarFieldEnum, { name: 'ExampleScalarFieldEnum', description: undefined })
