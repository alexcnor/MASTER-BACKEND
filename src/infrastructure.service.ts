import { Injectable, Logger } from '@nestjs/common';
import { InfraDto } from './dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class InfrastructureService {
  private readonly log = new Logger(InfrastructureService.name);

  constructor(private readonly httpService: HttpService) {}

  async createAKS(body: InfraDto) {
    this.log.debug(body);
    return await this.runPipeline(209, {
      client: body.client,
      environment: body.environment,
      nodeNumber: body.nodeNumber,
      resourceGroup: body.resourceGroup,
      vmSize: body.vmSize,
    });
  }

  async createMySQL(body: InfraDto) {
    this.log.debug(body);
    return await this.runPipeline(210, {
      client: body.client,
      environment: body.environment,
      resourceGroup: body.resourceGroup,
      storage: body.storage,
      tier: body.tier,
      version: body.version,
    });
  }

  private async runPipeline(pipeline: number, body: any) {
    const path = `https://dev.azure.com/tecnoandinaspa/service-catalog/_apis/pipelines/${pipeline}/runs?api-version=6.0-preview.1`;
    const buffer = Buffer.from(
      ':4oi2bdzb5ug4rujfzobukljmpbhikdreb7vc2cqzil3rujmynapa',
    );
    return await lastValueFrom(
      this.httpService
        .post(
          path,
          { templateParameters: body },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Basic ' + buffer.toString('base64'),
            },
          },
        )
        .pipe(map((response) => response.data)),
    );
  }
}
