import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sprite: string;

  @Column()
  name: string;

  @Column('jsonb', { nullable: true })
  types: string[];

  @Column()
  height: string;

  @Column()
  weight: string;
}
