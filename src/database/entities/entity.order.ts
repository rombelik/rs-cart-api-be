import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, BaseEntity, JoinColumn } from "typeorm";

import {User} from "./entity.user"; 

@Entity()
export class Order extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('uuid')
  public cart_id: string;

  @Column({type: 'jsonb'})
  public payment: { name: string; value: string };

  @Column({type: 'jsonb'})
  public delivery: { name: string; value: string };

  @Column('text')
  public comments: string;

  // @Column('enum')
  // public status: 'enabled' | 'disabled';

  // @Column('number')
  // public total: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User

}
