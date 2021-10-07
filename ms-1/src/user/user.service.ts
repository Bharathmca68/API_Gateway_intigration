import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredDto, FectUserDTO } from './dtos/user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async signup(authCredDto: AuthCredDto) {

        const { email, username, password } = authCredDto;
        // console.log("user creations here", email, user_name, password);
        //Hasing  password
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(password, salt)


        const newUser = this.usersRepository.create({ email, username: username, password: hash })

        try {
            await this.usersRepository.save(newUser)
            return { message: 'User Created successfully' }
        } catch (error) {
            if (error.errno === 1062) {
                throw new ConflictException('username already exists')
            } else {
                throw new InternalServerErrorException();
            }

        }

    }

    async GetAllUsers(fectUserDTO: FectUserDTO) {

        const { page, size } = fectUserDTO

        const users = await this.usersRepository.find({
            take: size,
            skip: size * (page - 1)
        })
        return users
    }
}
