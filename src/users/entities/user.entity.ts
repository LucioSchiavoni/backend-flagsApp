import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Result } from 'src/result/entities/result.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(()  => ID)
  id: string; 
  

  @Column( {unique:true})
  @Field(() => String)
  username: string;

  @Column()
  password: string;
  
  @OneToMany(() => Result, (result) => result.user)
  @Field(() => [Result], {nullable: true})
  result: Result[];
}
