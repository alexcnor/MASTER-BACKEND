import { Body, Controller, Post } from '@nestjs/common';
import { InfrastructureService } from './infrastructure.service';
import { InfraDto } from './dto';

@Controller('/infrastructure')
export class infrastructureController {
  constructor(private readonly appService: InfrastructureService) {}

  @Post('/create')
  create(@Body() body: InfraDto) {
    if ('kubernetes cluster' === body.componente)
      return this.appService.createAKS(body);
    if ('mysql' === body.componente) return this.appService.createMySQL(body);
  }
}
