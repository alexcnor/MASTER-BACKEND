export class InfraDto {
  environment: string;
  client: string;
  tipoComponente: string;
  resourceGroup: string;
  componente: string;
  vmSize?: string;
  nodeNumber?: number;
  tier?: string;
  version?: string;
  storage?: string;
}
