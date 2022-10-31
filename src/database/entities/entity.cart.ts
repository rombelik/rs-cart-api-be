import { CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, BaseEntity, OneToOne, OneToMany, JoinColumn } from "typeorm";
import { User } from './entity.user'
import { CartItem } from './entity.cart_item'

@Entity()
export class Cart extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;
  
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User

  @OneToMany(
    () => CartItem,
    items => items.cart
  )
  items: CartItem[];

}