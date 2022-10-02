import { Test, TestingModule } from '@nestjs/testing';
import { infrastructureController } from './infrastructure.controller';
import { InfrastructureService } from './infrastructure.service';
import { InfraDto } from './dto';
import { HttpModule } from '@nestjs/axios';

describe('AppController', () => {
  let appController: infrastructureController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [infrastructureController],
      providers: [InfrastructureService],
    }).compile();

    appController = app.get<infrastructureController>(infrastructureController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.create(new InfraDto())).toBe('');
    });
  });
});
