import { Injectable, Logger } from '@nestjs/common';
@Injectable()
export class NotificationsService {
 private readonly logger = new Logger(NotificationsService.name);
 async sendOrderNotification(data: { eventId?: string; orderId: number; userId: number; total: string }) {
  if (data.total === '9999') throw new Error('Falha simulada para testar a DLQ');
  this.logger.log(`Notificação do pedido ${data.orderId}`);
  this.logger.log(`Usuário: ${data.userId}`);
  this.logger.log(`Total: R$ ${data.total}`);
  return { success: true };
 }
}
