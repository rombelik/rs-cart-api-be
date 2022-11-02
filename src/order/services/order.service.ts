import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

import { Order } from '../../database/entities/entity.order';

@Injectable()
export class OrderService {
  // private orders: Record<string, Order> = {}

  async findById(orderId: string) {
    const order = await Order.findByIds([orderId])
    console.log('order-------------------------', order)
    return order
  }

  // create(data: any) {
  //   const id = v4(v4())
  //   const order = {
  //     ...data,
  //     id,
  //     status: 'inProgress',
  //   };

  //   this.orders[ id ] = order;

  //   return order;
  // }

  // update(orderId, data) {
  //   const order = this.findById(orderId);

  //   if (!order) {
  //     throw new Error('Order does not exist.');
  //   }

  //   this.orders[ orderId ] = {
  //     ...data,
  //     id: orderId,
  //   }
  // }
}
