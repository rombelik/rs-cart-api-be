import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class CartItem extends BaseEntity{
  @PrimaryColumn('uuid')
  public cart_id: string;

  @Column('uuid')
  public product_id: string;
}