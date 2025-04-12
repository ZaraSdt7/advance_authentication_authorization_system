import { IsEmail, IsNumber, Length } from "class-validator";

export class VerifyOtpDto {
    @IsEmail({}, { message: "Invalid email" })
    email:string

    @IsNumber()
    @Length(6, 6, { message: "OTP code must be 6 numbers" })
    code:number
}