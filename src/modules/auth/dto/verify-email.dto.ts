import { IsString } from "class-validator";

export class VerifyEmailDTO {
    @IsString({ message: "Token is required string" })
    token: string;
}
