import { Injectable } from '@nestjs/common';
import { Carts } from '../../database/entities/entity.carts';
import { v4 } from 'uuid';
@Injectable()
export class CartService {
  
  async getCarts() {
    return await Carts.find();
  }

  // async findOrCreateByUserId(userId: string): Promise<Carts> {
  //   const userCart = await this.findByUserId(userId);

  //   if (userCart) {
  //     return await userCart;
  //   }

  //   return await this.createByUserId(userId);
  // }

  // async findByUserId(userId: string): Promise<Carts> {
  //   return await this.userCarts[ userId ];
  // }

  // async createByUserId(userId: string) {
  //   const id = v4(v4());
  //   const userCart = {
  //     id,
  //   };


  //   return userCart;
  // }


}

// // import { Cart } from '../models';
// // import { Cart } from '../../database/entities/entity.cart'

// // @Injectable()
// // export class CartService {
// //   private userCarts: Record<string, Cart> = {};

// //   findByUserId(userId: string): Cart {
// //     return this.userCarts[ userId ];
// //   }

// //   createByUserId(userId: string) {
// //     const id = v4(v4());
// //     const userCart = {
// //       id,
// //       items: [],
// //     };

// //     this.userCarts[ userId ] = userCart;

// //     return userCart;
// //   }

// //   findOrCreateByUserId(userId: string): Cart {
// //     const userCart = this.findByUserId(userId);
// //     console.log('by_user_id---------------', userId)

// //     if (userCart) {
// //       return userCart;
// //     }

// //     return this.createByUserId(userId);
// //   }

// //   updateByUserId(userId: string, { items }: Cart): Cart {
// //     const { id, ...rest } = this.findOrCreateByUserId(userId);

// //     const updatedCart = {
// //       id,
// //       ...rest,
// //       items: [ ...items ],
// //     }

// //     this.userCarts[ userId ] = { ...updatedCart };

// //     return { ...updatedCart };
// //   }

// //   removeByUserId(userId): void {
// //     this.userCarts[ userId ] = null;
// //   }

// // }
