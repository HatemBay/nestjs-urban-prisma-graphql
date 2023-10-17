import { Test, TestingModule } from '@nestjs/testing';
import { ExamplesResolver } from './examples.resolver';
import { ExamplesService } from './examples.service';

describe('ExamplesResolver', () => {
  let resolver: ExamplesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamplesResolver, ExamplesService],
    }).compile();

    resolver = module.get<ExamplesResolver>(ExamplesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
