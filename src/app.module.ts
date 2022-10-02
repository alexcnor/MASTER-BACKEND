import { Module } from '@nestjs/common';
import { infrastructureController } from './infrastructure.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [infrastructureController],
  providers: [AppService],
})
export class AppModule {}
