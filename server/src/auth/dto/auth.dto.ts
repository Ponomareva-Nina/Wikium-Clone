import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class AuthDto {
  @ApiProperty({ example: 'user@user.com', description: 'User email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345678', description: 'User password' })
  @Length(8)
  @IsString()
  password: string;
}
