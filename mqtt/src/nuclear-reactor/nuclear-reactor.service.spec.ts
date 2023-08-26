import { Test, TestingModule } from '@nestjs/testing';
import { NuclearReactorService } from './nuclear-reactor.service';

describe('NuclearReactorService', () => {
  let service: NuclearReactorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NuclearReactorService],
    }).compile();

    service = module.get<NuclearReactorService>(NuclearReactorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
