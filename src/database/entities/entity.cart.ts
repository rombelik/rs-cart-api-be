import { CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany, OneToOne } from "typeorm";
import { User } from './entity.user'

@Entity()
export class Cart extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;
  
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;

  @OneToOne(() => User, (user) => user.cart)
  user: User
}