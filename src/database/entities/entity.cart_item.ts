import { Entity, PrimaryColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";

import { Cart } from './entity.cart'
import { Product } from './entity.product'
@Entity()
export class CartItem extends BaseEntity{
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  productId: string;

  @Column()
  count: number;

  @ManyToOne(() => Cart)
  @JoinColumn({name: 'cartId'})
  cart: Cart;
}