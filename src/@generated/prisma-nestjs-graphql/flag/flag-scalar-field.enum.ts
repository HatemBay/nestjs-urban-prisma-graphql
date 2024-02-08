import { registerEnumType } from '@nestjs/graphql';

export enum FlagScalarFieldEnum {
    id = "id",
    reason = "reason",
    content = "content",
    postId = "postId",
    userId = "userId",
    createdAt = "createdAt"
}


registerEnumType(FlagScalarFieldEnum, { name: 'FlagScalarFieldEnum', description: undefined })
