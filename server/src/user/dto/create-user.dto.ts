import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'hashpassword',
    description: 'User password',
  })
  @IsString()
  email: string;
  @ApiProperty({
    example: 'hashpassword',
    description: 'User password',
  })
  @Length(8)
  @IsString()
  password: string;
}
