import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { infrastructureController } from './infrastructure.controller';
import { InfrastructureService } from './infrastructure.service';

@Module({
  imports: [HttpModule],
  controllers: [infrastructureController],
  providers: [InfrastructureService],
})
export class AppModule {}
