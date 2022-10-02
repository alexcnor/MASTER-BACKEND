import { Injectable, Logger } from '@nestjs/common';
import { InfraDto } from '../dto';
import { AzureDevopsService } from './azureDevops.service';

@Injectable()
export class InfrastructureService {
  private readonly log = new Logger(InfrastructureService.name);
  constructor(private readonly azureDevopsService: AzureDevopsService) {}

  async createAKS(body: InfraDto) {
    this.log.debug(body);
    return await this.azureDevopsService.runPipeline(209, {
      client: body.client,
      environment: body.environment,
      nodeNumber: body.nodeNumber,
      resourceGroup: body.resourceGroup,
      vmSize: body.vmSize,
    });
  }

  async createMySQL(body: InfraDto) {
    this.log.debug(body);
    return await this.azureDevopsService.runPipeline(210, {
      client: body.client,
      environment: body.environment,
      resourceGroup: body.resourceGroup,
      storage: body.storage,
      tier: body.tier,
      version: body.version,
    });
  }
}
