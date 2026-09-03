import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getHello(): string {
    return this.orderService.getHello();
  }

  @MessagePattern('order-created')
  handleOrderCreated(@Payload() order: any) {
    console.error('==================>Order created', order);
  }
}
