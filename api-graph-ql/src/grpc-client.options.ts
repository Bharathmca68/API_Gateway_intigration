import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: '127.0.0.1:50051',
        package: 'user',
        protoPath: join(__dirname, '../src/proto/users.proto'),
    },
};
