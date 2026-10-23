import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Injectable()
export class UsersService {
 constructor(private readonly prisma: PrismaService) {}
 create(data: { name: string; email: string }) { return this.prisma.user.create({ data }); }
 findOne(id: number) { return this.prisma.user.findUnique({ where: { id } }); }
 findAll() { return this.prisma.user.findMany(); }
}
