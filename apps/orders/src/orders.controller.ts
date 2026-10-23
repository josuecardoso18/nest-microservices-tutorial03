import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
@Controller('orders')
export class OrdersController {
 constructor(private readonly orders: OrdersService) {}
 @Post() create(@Body() body: { userId: number; description: string; total: number }) {
  return this.orders.create({ ...body, userId: Number(body.userId), total: Number(body.total) });
 }
 @Get() findAll() { return this.orders.findAll(); }
 @Get(':id') findOne(@Param('id', ParseIntPipe) id: number) { return this.orders.findOne(id); }
}
