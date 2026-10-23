import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
@Controller()
export class UsersController {
 constructor(private readonly users: UsersService) {}
 @MessagePattern('users.findOne') findOne(@Payload() id: number) { return this.users.findOne(Number(id)); }
 @MessagePattern('users.findAll') findAll() { return this.users.findAll(); }
 @MessagePattern('users.create') create(@Payload() data: { name: string; email: string }) { return this.users.create(data); }
}
