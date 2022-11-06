import { Injectable, Inject } from '@nestjs/common';
// import { Repository } from 'typeorm';
import { Cart } from '../../database/entities/entity.cart';
// import { User } from '../../database/entities/entity.user';
// import { Product } from '../../database/entities/entity.product'
// import { Order } from '../../database/entities/entity.order'
import { v4 } from 'uuid';
// import { CartModule } from '../cart.module';
@Injectable()
export class CartService {
  // constructor(
  //   @Inject('CARTS_REPOSITORY')
  //   private readonly cartRepository: Repository<Cart>,
  //   @Inject('USERS_REPOSITORY')
  //   private readonly userRepository: Repository<User>,
  //   @Inject('PRODUCTS_REPOSITORY')
  //   private readonly productRepository: Repository<Product>,
  //   @Inject('ORDERS_REPOSITORY')
  //   private readonly orderRepository: Repository<Order>
  // ) {}


  
  async getCarts() {
    return await Cart.find();
  }

  async findOrCreateByUserId(userId: string): Promise<any> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return await userCart;
    }

    return await this.createByUserId(userId);
  }

  async findByUserId(userId: string) {
    
    const cart = await Cart.createQueryBuilder('cart')
    .leftJoinAndSelect("cart.items", "items")
    .leftJoin("cart.user", "user")
    .where('user.id = :userId', {
      userId: userId
    })
    .getOne()
    if (cart) {
      console.log('cart-------------', cart)
      return cart;
    }
    return undefined;
  }

  async createByUserId(userId: string): Promise<{ id: any; user_id: string; }> {
    const id = v4(v4());
    const userCart = {
      id,
      user_id: userId
    };


    return userCart;
  }


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
