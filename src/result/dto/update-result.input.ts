import { CreateResultInput } from './create-result.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateResultInput extends PartialType(CreateResultInput) {
  @Field(() => Int)
  id: number;
}
