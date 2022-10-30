import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Users extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  name!: string;

  @Column({ name: 'email' })
  email!: string;

  @Column({ select: false })
  password!: string;
}