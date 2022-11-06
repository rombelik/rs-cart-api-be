import { PrimaryColumn, Entity, Column, OneToOne, JoinColumn } from 'typeorm';

import { Product } from './entity.product';

@Entity('Stocks')
export class Stock {
  @PrimaryColumn('uuid')
  id: string

  @Column({name: 'count'})
  count: number;

  @OneToOne(() => Product, product => product.stock)
  @JoinColumn({name: 'product_id'})
  product: Product;
}