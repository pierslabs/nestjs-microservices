import { Test, TestingModule } from '@nestjs/testing';
import { NuclearReactorController } from './nuclear-reactor.controller';
import { NuclearReactorService } from './nuclear-reactor.service';

describe('NuclearReactorController', () => {
  let controller: NuclearReactorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NuclearReactorController],
      providers: [NuclearReactorService],
    }).compile();

    controller = module.get<NuclearReactorController>(NuclearReactorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
