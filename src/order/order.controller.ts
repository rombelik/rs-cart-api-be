import { Controller, Get, Param } from '@nestjs/common';
import { OrderService } from './services/order.service';

@Controller('api/order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService
  ) {}

  @Get(':id')
  async findOneById(
    @Param('id') id: string
  ){
    return this.orderService.findById(id);
  }
}