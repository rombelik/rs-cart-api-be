import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, BaseEntity, JoinColumn } from "typeorm";

import {Users} from "./entity.users"; 

@Entity()
export class Orders extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('uuid')
  public cart_id: string;

  @Column('simple-json')
  public payment: { name: string; value: string };

  @Column('simple-json')
  public delivery: { name: string; value: string };

  @Column('text')
  public comments: string;

  @Column('enum')
  public status: 'enabled' | 'disabled';

  @Column('number')
  public total: number;

  @ManyToOne(type => Users) @JoinColumn() 
  user_id: Users;
}
