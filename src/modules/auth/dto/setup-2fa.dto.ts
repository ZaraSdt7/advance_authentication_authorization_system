import { IsNumber, Length } from "class-validator";

export class Setup2FADto {
    @IsNumber()
    @Length(6, 6, { message: "Code must be 6 numbers" })
    code: number;
}
