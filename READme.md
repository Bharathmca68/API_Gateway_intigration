Packages needed:
npm install --save @nestjs/typeorm typeorm mysql2
npm i --save @nestjs/microservices
npm i class-validator --save
npm i class-transformer --save
npm i --save @grpc/grpc-js @grpc/proto-loader

npm uninstall <package-name>

Project archtechture

API_Gateway
|
| --MS-1
|
| --MS-2

API_Gateway
-- only redirect the income routes and get the response and send back to End user
-- no Database connection
-- connection with gRPC for particular microservices

Microservices
-- contains all the functionalities
-- its going to connect with grpcmethod in the controller to retuns the data to API_Gateway
-- proto file should be same in both API_Gateway and particular Microservices
-- there is no use of interface in both API_Gateway and particular Microservices
-- interface is optional

Proto file:
-- dont use any of the special charactors it ll throw error
-- input and output message should be declared

Microservices-1

> > create a new microservice app with cmd below
> > -- nest new MS-1 --skip-git
> > create a folder called user by using a following cmd

    - $ nest g mo user // module
    - $ nest g co user --no-spec  // controller
    - $ nest g s user --no-spec  // service

NOTE : gRPC option and proto file should be same in the both API_Gateway and Microservice

> > create a user.entity.ts file
> > add the connection string in app.module refer typeORM
> > start the server so now ur able to see the table is created in the MYSQL DATABASE
> > implement the routes as what are u going to work in the functionalities
> > modify the main.ts file like connection of microservice with gRPC refer gRPC-client.option.ts file
> > add the proto
> > proto file should be correctly define or else it ll not connect the microservice
> > start the server now and u r able to see this "Nest microservice successfully started" in the console

client connection (API_Gateway)

> > create a new nest app with cmd below
> > -- nest new API_Gateway --skip-git
> > start the server once
> > create a folder called user by using a following cmd

    - $ nest g mo user // module
    - $ nest g r user --no-spec  // controller
    - $ nest g co user --no-spec  // controller
    - $ nest g s user --no-spec  // service

> > copy past the gRPC options and proto file
> > here we should only modify the controller for connection with gRPC
> > -- add this

    -- @Client(grpcClientOptions)
    -- private client: ClientGrpc
    -- private usersService

    -- onModuleInit() {
        this.usersService = this.client.getService('UsersService')
    }

> > now start the server and play with microservice :)

GraphQL API_Gateway

Packages needed:

> > npm i --save @nestjs/microservices
> > npm i class-validator --save
> > npm i class-transformer --save
> > npm i --save @grpc/grpc-js @grpc/proto-loader
> > npm i @nestjs/graphql@9.0.2 --save
> > npm i graphql@15.5.1 --save
> > npm i apollo-server-express@3.3.0 --save
> > npm install @apollo/gateway --save

> > copy past the gRPC connection options and proto file
> > Remaining steps same as REST_API
