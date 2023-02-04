import { Injectable } from '@nestjs/common';
import { OrderStatus, gt } from '@learn/choices';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify({
      message: 'Hello World!',
      status: OrderStatus.CANCELLED,
      gt: gt()
    });
  }
}
