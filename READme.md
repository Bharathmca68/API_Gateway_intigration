Packages needed:
npm install --save @nestjs/typeorm typeorm mysql2
npm i --save @nestjs/microservices
npm i class-validator --save
npm i class-transformer --save
npm i --save @grpc/grpc-js @grpc/proto-loader

npm uninstall <package-name>

Project archtechture 

		       |------MS-1
--API_Gateway---
		       |------MS-2


API_Gateway
-- only redirect the income routes and get the response and send back to End user 
-- no Database connection
-- connection with gRPC

Microservices
-- contains all the functionalities 
-- its going to connect with grpcmethod in the controller 
-- proto file should be same in both 

Microservices-1
>> create a new microservice app with cmd below
 	-- nest new MS-1 --skip-git
	-- cd MS-1
>> create a folder called users by using a following cmd
	- $ nest g mo user // module
	- $ nest g co user --no-spec  // controller
	- $ nest g s user --no-spec  // service


NOTE : gRPC option and proto file should be same in the both the files 
>>	create a user.entity.ts file 
>> 	add the connection string in app.module refer typeORM
>> start the server so now ur able to see the table is created in the MYSQL DATABASE 
>> implement the routes as what are u going to work in the functionalities 
>> modify the main.ts file like connection of microservice with gRPC refer gRPC-client.option.ts file 
>> add the proto 
>> 


