import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { InfraDto } from './dto';

@Controller('/infrastructure')
export class infrastructureController {
  constructor(private readonly appService: AppService) {}

  @Post('/create')
  create(@Body() body: InfraDto) {
    return this.appService.create(body);
  }
}
