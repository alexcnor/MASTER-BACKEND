import { Injectable, Logger } from '@nestjs/common';
import { InfraDto } from './dto';

@Injectable()
export class AppService {
  private readonly log = new Logger(AppService.name);

  create(body: InfraDto) {
    this.log.debug(body);
    return 'Hello World!';
  }
}
