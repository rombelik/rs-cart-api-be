import { Injectable } from '@nestjs/common';
import { Carts } from '../../database/entities/entity.cart';
@Injectable()
export class CartService {
  
  async getCarts() {
    return await Carts.find();
  }
}
// export class CartService {
//   constructor(@InjectRepository(Cart) private readonly repo: Repository<Cart>) { }

//   // public async findByUserId() {
//   //   return await this.repo.find();
//   // }
  
//   // public async findOrCreateByUserId() {
//   //   return await this.repo.find();
//   // }

//   // public async getAll() {
//   //   return await this.repo.find();
//   // }

//   public async getAll() {
//     return await this.createQueryBuilder()
//     .select("user")
//     .from(User, "user")
//     .where("user.id = :id", { id: 1 })
//     .getOne()
//   }
// }

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
