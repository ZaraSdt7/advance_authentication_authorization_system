import { IsNumber, isNumber, IsString, Length } from "class-validator";

export class LOgin2FADto {
    @IsString({message:'UserID is required string'})
    userID: string

    @IsNumber()
    @Length(6,6, {message:'Code must be 6 numbers'})
    code: number
}