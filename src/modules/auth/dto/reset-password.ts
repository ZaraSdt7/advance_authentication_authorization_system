
import { IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsString({ message: 'Token is required string' })
  token: string;

  @IsString({ message: 'Password is required string' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}