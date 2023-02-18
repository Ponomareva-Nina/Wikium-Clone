import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;
  @IsString()
  @IsOptional()
  surname?: string;
  @IsString()
  @IsOptional()
  birthDay?: string;
  @IsString()
  @IsOptional()
  gender?: string;
  @IsString()
  @IsOptional()
  education?: string;
  @IsString()
  @IsOptional()
  avatar?: string;
  @IsString()
  @IsOptional()
  refreshToken?: string;
}
