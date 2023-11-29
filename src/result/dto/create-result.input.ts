import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';


@InputType()
export class CreateResultInput {

  @IsNotEmpty({message: 'Campo obligatorio.'})
  @Field()
  record: string;

  @IsNotEmpty({message: 'Campo obligatorio.'})
  @Field()
  categories: string;


}
