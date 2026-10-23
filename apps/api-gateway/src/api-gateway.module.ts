import 'dotenv/config';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
@Module({
 imports: [ClientsModule.register([{ name: 'USERS_SERVICE', transport: Transport.TCP, options: { host: process.env.USERS_TCP_HOST || '127.0.0.1', port: Number(process.env.USERS_TCP_PORT || 3001) } }])],
 controllers: [ApiGatewayController], providers: [ApiGatewayService]
})
export class ApiGatewayModule {}
