import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NotificationsModule } from './notifications.module';
async function bootstrap() {
 const app = await NestFactory.createMicroservice<MicroserviceOptions>(NotificationsModule, {
  transport: Transport.RMQ,
  options: { urls: [process.env.RABBITMQ_URL || 'amqp://app:app123@localhost:5672'], queue: process.env.RABBITMQ_NOTIFICATIONS_QUEUE || 'notifications_queue', queueOptions: { durable: true }, noAck: false, prefetchCount: 1 }
 });
 await app.listen();
 console.log('Notifications Service conectado ao RabbitMQ');
}
bootstrap();
