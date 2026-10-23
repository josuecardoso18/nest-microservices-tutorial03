import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { UsersModule } from './users.module';
async function bootstrap() {
 const app = await NestFactory.createMicroservice<MicroserviceOptions>(UsersModule, {
  transport: Transport.TCP,
  options: { host: process.env.USERS_TCP_HOST || '127.0.0.1', port: Number(process.env.USERS_TCP_PORT || 3001) }
 });
 await app.listen();
 console.log('Users Service TCP ativo na porta 3001');
}
bootstrap();
