import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';
@Injectable()
export class ApiGatewayService {
 constructor(@Inject('USERS_SERVICE') private readonly usersClient: ClientProxy) {}
 createUser(data: { name: string; email: string }) { return firstValueFrom(this.usersClient.send('users.create', data).pipe(timeout(3000))); }
 findUsers() { return firstValueFrom(this.usersClient.send('users.findAll', {}).pipe(timeout(3000))); }
}
