import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator"

@InputType()
export class AuthCredDto {
    @Field()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: "Password is too week" })
    password: string;

    @Field()
    @IsEmail()
    email: string
}

@InputType()
export class FectUserDTO {
    @Field()
    @IsNumber()
    page: number

    @Field()
    @IsNumber()
    size: number
}

