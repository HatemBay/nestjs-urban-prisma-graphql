import { Module } from '@nestjs/common';
import { ExamplesService } from './examples.service';
import { ExamplesResolver } from './examples.resolver';

@Module({
  providers: [ExamplesResolver, ExamplesService],
})
export class ExamplesModule {}
