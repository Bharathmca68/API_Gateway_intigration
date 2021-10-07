import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthCredDto, FectUserDTO } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {

    constructor(@Inject('UsersService') private readonly usersService: UserService) { }

    @GrpcMethod('UsersService', 'signup')
    // @Post('/signup')
    async signup(authCredDto: AuthCredDto) {
        return await this.usersService.signup(authCredDto);
    }

    @GrpcMethod('UsersService', 'fetchUser')
    // @Get('/getalluser')
    async fetchUser(fectUserDTO: FectUserDTO) {
        const { page, size } = fectUserDTO
        console.log(page, size)
        const temp = await this.usersService.GetAllUsers(fectUserDTO);
        console.log(temp)
        return temp

    }
}


//ERROR [ExceptionsHandler] 12 UNIMPLEMENTED: The server does not implement the method /user.UsersService/fetchUser ===== getmethod 2nd agrs
//@Query('page') page: number = 1, @Query('size') size: number = 2