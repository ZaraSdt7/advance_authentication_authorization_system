import { IsEmail, IsString } from "class-validator"

export class LoginDTO {
    @IsEmail({}, { message: "Invalid email" })
    email: string
    @IsString({ message: " password is required string" })
    password: string
}