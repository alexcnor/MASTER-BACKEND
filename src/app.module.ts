import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { infrastructureController } from './infrastructure.controller';
import { InfrastructureService } from './infrastructure.service';
import { healthController } from './health.controller';

@Module({
  imports: [HttpModule],
  controllers: [infrastructureController, healthController],
  providers: [InfrastructureService],
})
export class AppModule {}
