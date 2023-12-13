import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';


@InputType()
export class CreateResultInput {

  @IsNotEmpty({message: 'Campo obligatorio.'})
  @Field()
  record: number;

  @IsNotEmpty({message: 'Campo obligatorio.'})
  @Field()
  categories: string;

  @Field(() => ID)
  userId: string;


}
