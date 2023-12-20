import { Test, TestingModule } from '@nestjs/testing';
import { FlagsResolver } from './flags.resolver';
import { FlagsService } from './flags.service';

describe('FlagsResolver', () => {
  let resolver: FlagsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlagsResolver, FlagsService],
    }).compile();

    resolver = module.get<FlagsResolver>(FlagsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
