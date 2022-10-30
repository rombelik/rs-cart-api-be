import { CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Carts extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;
  
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;
}