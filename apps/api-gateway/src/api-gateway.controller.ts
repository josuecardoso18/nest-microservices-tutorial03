import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
@Controller()
export class ApiGatewayController {
 constructor(private readonly gateway: ApiGatewayService) {}
 @Post('users') createUser(@Body() body: { name: string; email: string }) { return this.gateway.createUser(body); }
 @Get('users') findUsers() { return this.gateway.findUsers(); }
}
