import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator"

export class AuthCredDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: "Password is too week" })
    password: string;

    @IsEmail()
    email: string
}
//@Query('page') page: number = 1, @Query('size') size: number = 2
export class FectUserDTO {
    @IsNumber()
    page: number

    @IsNumber()
    size: number
}

