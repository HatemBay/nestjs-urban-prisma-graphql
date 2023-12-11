import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
    id = "id",
    titleArabic = "titleArabic",
    titleLatin = "titleLatin",
    contentArabic = "contentArabic",
    contentEnglish = "contentEnglish",
    contentFrench = "contentFrench",
    published = "published",
    likesCount = "likesCount",
    dislikesCount = "dislikesCount",
    authorId = "authorId",
    isU18 = "isU18",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })
