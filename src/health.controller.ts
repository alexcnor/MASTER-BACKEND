import { Controller, Get, Logger } from '@nestjs/common';

@Controller('/health')
export class healthController {
  private readonly log = new Logger(healthController.name);

  @Get()
  get() {
    this.log.log(process.env.VERSION);
    return process.env.VERSION;
  }
}
