import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Result } from 'src/result/entities/result.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;

  @OneToMany(() => Result, (result) => result.user)
  @Field(() => [Result], {nullable: true})
  result: Result[];
}
