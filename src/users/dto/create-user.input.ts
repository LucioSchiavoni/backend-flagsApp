import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {

  @IsNotEmpty({message: 'Campo obligatorio'})
  @Field( () => String)
  username: string;

  @IsNotEmpty({message: 'Campo obligatorio'})
  @MinLength(8, {message: 'La clave debe ser de un minimo de 8 caracteres.'})
  @Field( () => String)
  password: string;
}
