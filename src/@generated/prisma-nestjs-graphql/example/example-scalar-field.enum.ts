import { registerEnumType } from '@nestjs/graphql';

export enum ExampleScalarFieldEnum {
    id = "id",
    contentArabic = "contentArabic",
    contentEnglish = "contentEnglish",
    contentFrench = "contentFrench",
    postId = "postId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ExampleScalarFieldEnum, { name: 'ExampleScalarFieldEnum', description: undefined })
