import { Test, TestingModule } from '@nestjs/testing';
import { infrastructureController } from './infrastructure.controller';
import { InfraDto } from './dto';
import { HttpModule } from '@nestjs/axios';
import { AzureDevopsService, InfrastructureService } from './service';

describe('AppController', () => {
  let appController: infrastructureController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [infrastructureController],
      providers: [
        InfrastructureService,
        {
          provide: AzureDevopsService,
          useValue: {
            runPipeline: () => true,
          },
        },
      ],
    }).compile();

    appController = app.get<infrastructureController>(infrastructureController);
  });

  describe('root', () => {
    it('should return true"', async () => {
      const dto = new InfraDto();
      dto.componente = 'kubernetes cluster';
      expect(await appController.create(dto)).toBe(true);
    });
  });
});
