import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString } from 'class-validator';

export class UpdatePasswordDto {
  @ApiProperty({
    example: 'hashpassword',
    description: 'User password',
  })
  @Length(8)
  @IsString()
  oldPassword: string;
  @ApiProperty({
    example: 'hashpassword',
    description: 'User password',
  })
  @Length(8)
  @IsString()
  newPassword: string;
}
