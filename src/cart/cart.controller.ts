import { Controller, Get, Delete, Put, Body, Req, Post, UseGuards, HttpStatus } from '@nestjs/common';

// import { BasicAuthGuard, JwtAuthGuard } from '../auth';
import { OrderService } from '../order';
import { CartService }  from './services/cart.service'
import { AppRequest, getUserIdFromRequest } from '../shared';

import { calculateCartTotal } from './models-rules';
// import { CartService } from './services';

@Controller('api/profile/cart')
export class CartController {
  constructor(
    private cartService: CartService,
    // private orderService: OrderService
  ) { }

  // @UseGuards(JwtAuthGuard)
  // @UseGuards(BasicAuthGuard)
  // @Get('')
  // async findAll() {
  //   const carts = await this.cartService.getCarts()
  //   console.log('carts', carts)
  //   return {carts}
  // }
  
  @Get()
  async findUserCart(@Req() req: AppRequest) {
    const mockUserId = 'ec40adf7-44fe-4d9d-bed9-58d55152c508'
    // const cart = await this.cartService.findByUserId(getUserIdFromRequest(req));
    const cart = await this.cartService.findByUserId(mockUserId);

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: { 'cart': cart },
    }
  }

  // @UseGuards(JwtAuthGuard)
  // @UseGuards(BasicAuthGuard)
  @Put()
  updateUserCart(@Req() req: AppRequest, @Body() body) { // TODO: validate body payload...
    // const cart = this.cartService.updateByUserId(getUserIdFromRequest(req), body)

    // return {
    //   statusCode: HttpStatus.OK,
    //   message: 'OK',
    //   data: {
    //     cart,
    //     total: calculateCartTotal(cart),
    //   }
    // }
    return {}
  }

  // @UseGuards(JwtAuthGuard)
  // @UseGuards(BasicAuthGuard)
  @Delete()
  clearUserCart(@Req() req: AppRequest) {
    // this.cartService.removeByUserId(getUserIdFromRequest(req));

    // return {
    //   statusCode: HttpStatus.OK,
    //   message: 'OK',
    // }

    return {}
  }

  // @UseGuards(JwtAuthGuard)
  // @UseGuards(BasicAuthGuard)
  @Post('checkout')
  checkout(@Req() req: AppRequest, @Body() body) {
    // const userId = getUserIdFromRequest(req);
    // const cart = this.cartService.findByUserId(userId);

    // if (!(cart && cart.items.length)) {
    //   const statusCode = HttpStatus.BAD_REQUEST;
    //   req.statusCode = statusCode

    //   return {
    //     statusCode,
    //     message: 'Cart is empty',
    //   }
    // }

    // const { id: cartId, items } = cart;
    // const total = calculateCartTotal(cart);
    // const order = this.orderService.create({
    //   ...body, // TODO: validate and pick only necessary data
    //   userId,
    //   cartId,
    //   items,
    //   total,
    // });
    // this.cartService.removeByUserId(userId);

    // return {
    //   statusCode: HttpStatus.OK,
    //   message: 'OK',
    //   data: { order }
    // }

    return {}
  }
}
