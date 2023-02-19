import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'Ivan', description: 'User name' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'Ivanov', description: 'User surname' })
  @IsString()
  @IsOptional()
  surname?: string;

  @ApiProperty({ example: '1999-03-02', description: 'User birthday' })
  @IsString()
  @IsOptional()
  birthDay?: string;

  @ApiProperty({ example: 'male', description: 'User gender' })
  @IsString()
  @IsOptional()
  gender?: string;

  @ApiProperty({ example: 'Higher', description: 'User education' })
  @IsString()
  @IsOptional()
  education?: string;

  @ApiProperty({
    example: 'https://somethingpath.com/avatar-1',
    description: 'User avatar path',
  })
  @IsString()
  @IsOptional()
  avatar?: string;

  @ApiProperty({
    example: 'jasdkfjlksadjfaiwu4t23r2.2398729r.fsdaf',
    description: 'User refresh token',
  })
  @IsString()
  @IsOptional()
  refreshToken?: string;
}
