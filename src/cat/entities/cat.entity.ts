import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// 实体类 一般代表数据库中的表，用于持久化数据
@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @Column()
  category: string;

  @Column()
  age: number;

  @Column()
  sex: number;
}
