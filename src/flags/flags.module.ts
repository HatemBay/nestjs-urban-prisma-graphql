import { Module } from '@nestjs/common';
import { FlagsService } from './flags.service';
import { FlagsResolver } from './flags.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [PrismaModule, PostsModule],
  providers: [FlagsResolver, FlagsService],
  exports: [FlagsService],
})
export class FlagsModule {}
