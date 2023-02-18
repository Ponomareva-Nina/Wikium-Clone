import { IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name?: string;
  @IsString()
  surname?: string;
  @IsString()
  birthDay?: string;
  @IsString()
  gender?: string;
  @IsString()
  education?: string;
  @IsString()
  avatar?: string;
  @IsString()
  refreshToken?: string;
}
