import { OnModuleInit } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc-client.options';
import { AuthCredDto, FectUserDTO } from './dtos/user.dto';
import { MessageDef, Usertype } from './resolver-type';

@Resolver()
export class UserResolver implements OnModuleInit {

    @Client(grpcClientOptions)
    private client: ClientGrpc
    private usersService

    onModuleInit() {
        this.usersService = this.client.getService('UsersService')
    }

    @Query(() => String)
    sayHello(): string {
        return 'Hello World!';
    }

    @Mutation(returns => MessageDef)
    async signup(@Args('input') input: AuthCredDto) {
        return await this.usersService.signup(input)
    }

    @Query(returns => Usertype)
    async fetchUser(@Args('input') input: FectUserDTO) {
        const temp = await this.usersService.fetchUser(input)
        console.log(temp)
        return temp
    }

}
