import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';


@InputType()
export class LoginUserInput {

  @IsNotEmpty({message: 'Campo obligatorio.'})
  @Field(() => String)
  username: string;

  @IsNotEmpty({message: 'Campo obligatorio.'})
  @Field(() => String)
  @MinLength(8, {message: 'La clave debe ser de un minimo de 8 caracteres.'})
  password: string;


}
