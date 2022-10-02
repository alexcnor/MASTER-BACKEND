import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AzureDevopsService {
  constructor(private readonly httpService: HttpService) {}

  async runPipeline(pipeline: number, body: any) {
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
