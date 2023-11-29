import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {

  @IsNotEmpty({message: 'Campo obligatorio'})
  @Field()
  username: string;

  @IsNotEmpty({message: 'Campo obligatorio'})
  @Field()
  password: string;
}
