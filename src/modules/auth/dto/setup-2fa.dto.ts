import { IsString, Length } from "class-validator";

export class Setup2FADto {
    @IsString({ message: "Code is required string" })
    @Length(6, 6, { message: "Code must be 6 numbers" })
    code: string;
}
