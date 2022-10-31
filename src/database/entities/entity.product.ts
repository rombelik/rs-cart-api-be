import { PrimaryColumn, Entity, Column, OneToOne } from 'typeorm';

// Entities
import { Stock } from './entity.stock';
import { CartItem } from './entity.cart_item';

@Entity('Products')
export class Product {
  @PrimaryColumn('uuid')
  id: string

  @Column({name: 'title'})
  title: string

  @Column({name: 'description'})
  description: string;

  @Column({name: 'price'})
  price: number;

  @OneToOne(() => Stock, stock => stock.product)
  stock: Stock;

  @OneToOne(() => CartItem, (cartItem) => cartItem.productId)
  cartItem: CartItem
}