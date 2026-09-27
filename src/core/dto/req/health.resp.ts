import { ApiProperty } from '@nestjs/swagger';

export class HealthResponse {
  @ApiProperty({
    description: 'Health status of the application',
    example: 'ok',
  })
  status: string;

  @ApiProperty({
    description: 'Timestamp of the health check',
    example: '2023-04-01T12:00:00.000Z',
  })
  time: Date;
}
