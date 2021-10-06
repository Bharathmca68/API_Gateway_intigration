import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthCredDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {

    constructor(@Inject('UsersService') private readonly usersService: UserService) { }

    @GrpcMethod('UsersService', 'signup')
    // @Post('/signup')
    async signup(authCredDto: AuthCredDto) {
        const { username, email, password } = authCredDto
        console.log("userdeyails", username, email, password)

        const temp = await this.usersService.signup(authCredDto);
        console.log(temp)
        return temp
    }

    // @Get('/getalluser')
    // async fetchUser(@Query('page') page: number = 1, @Query('size') size: number = 2) {
    //     return await this.usersService.GetAllUsers(page, size);
    // }
}
