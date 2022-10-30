import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { Cart } from './entity.cart'
import { Order } from './entity.order'

@Entity()
export class User extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  name!: string;

  @Column({ name: 'email' })
  email!: string;

  @Column({ select: false })
  password!: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[]

  @OneToOne(() => Cart, (card) => card.user)
  @JoinColumn({name: 'cart_id'})
  cart: Cart
}