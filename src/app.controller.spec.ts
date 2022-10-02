import { Test, TestingModule } from '@nestjs/testing';
import { infrastructureController } from './infrastructure.controller';
import { AppService } from './app.service';
import { InfraDto } from './dto';

describe('AppController', () => {
  let appController: infrastructureController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [infrastructureController],
      providers: [AppService],
    }).compile();

    appController = app.get<infrastructureController>(infrastructureController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.create(new InfraDto())).toBe('Hello World!');
    });
  });
});
