import { ApiProperty } from '@nestjs/swagger';

export class RefreshAuthDto {
  @ApiProperty({
    example: 'asdkjfoauf8auwef89uwafeu9jawjfe.jdsliafhhaw8ehf.lasdjflk',
    description: 'Refresh Token',
  })
  refreshToken: string;
}
