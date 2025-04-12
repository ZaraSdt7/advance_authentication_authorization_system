import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDTO {
    @IsEmail({}, { message: "Invalid email" })
    email: string;

    @IsString({ message: " password is required string" })
    @MinLength(6, { message: "Password must be at least 6 characters" })
    password: string;
}
