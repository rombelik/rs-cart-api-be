import { Entity, Column, BaseEntity } from "typeorm";

@Entity()
export class CartItems extends BaseEntity{
  @Column('uuid')
  public cart_id: string;

  @Column('uuid')
  public product_id: string;
}