import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3309,
    username: 'root',
    password: 'password',
    database: 'user',
    entities: [User],
    synchronize: true,
  }), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
