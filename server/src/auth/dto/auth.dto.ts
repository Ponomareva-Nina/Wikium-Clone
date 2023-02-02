import { IsEmail, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;
  @Length(8)
  @IsString()
  password: string;
}
