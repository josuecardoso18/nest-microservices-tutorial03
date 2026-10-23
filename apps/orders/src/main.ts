import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
async function bootstrap() {
 const app = await NestFactory.create(OrdersModule);
 app.setGlobalPrefix('internal');
 await app.listen(3002);
 console.log('Orders Service HTTP ativo na porta 3002');
}
bootstrap();
