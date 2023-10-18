import { Module } from '@nestjs/common';
import { ExamplesService } from './examples.service';
import { ExamplesResolver } from './examples.resolver';
import { PostsModule } from '../posts/posts.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PostsModule, PrismaModule],
  providers: [ExamplesResolver, ExamplesService],
})
export class ExamplesModule {}
