import { Body, Controller, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc-client.options';
import { AuthCredDto } from './dtos/user.dto';

@Controller('user')
export class UserController implements OnModuleInit {
    @Client(grpcClientOptions)
    private client: ClientGrpc
    private usersService

    onModuleInit() {
        this.usersService = this.client.getService('UsersService')
    }

    @Post('/signup')
    async signup(@Body() authCredDto: AuthCredDto) {
        const { username, password, email } = authCredDto
        console.log("user details:", username, password, email)
        return await this.usersService.signup(authCredDto);
    }
}
