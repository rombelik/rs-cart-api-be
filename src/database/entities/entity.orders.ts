import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, BaseEntity, JoinColumn } from "typeorm";

import {Users} from "./entity.users"; 

@Entity()
export class Orders extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('uuid')
  public cart_id: string;

  @Column('uuid')
  public payment: string;

  @Column('uuid')
  public delivery: string;

  @Column('uuid')
  public comments: string;

  @Column('uuid')
  public status: string;

  @Column('uuid')
  public total: string;

  @ManyToOne(type => Users) @JoinColumn() 
  user_id: Users;
}



    // id - uuid
    // user_id - uuid
    // cart_id - uuid (Foreign key from carts.id)
    // payment - JSON
    // delivery - JSON
    // comments - text
    // status - ENUM or text
    // total - number