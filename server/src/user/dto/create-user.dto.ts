import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email: string;

  @Length(8)
  @IsString()
  password: string;
}
