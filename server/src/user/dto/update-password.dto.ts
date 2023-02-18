import { Length, IsString } from 'class-validator';

export class UpdatePasswordDto {
  @Length(8)
  @IsString()
  oldPassword: string;
  @Length(8)
  @IsString()
  newPassword: string;
}
