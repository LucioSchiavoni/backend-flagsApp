import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ResultService } from './result.service';
import { Result } from './entities/result.entity';
import { CreateResultInput } from './dto/create-result.input';
import { UpdateResultInput } from './dto/update-result.input';

@Resolver(() => Result)
export class ResultResolver {
  constructor(
    private readonly resultService: ResultService
    ) {}

  @Mutation(() => Result)
  createResult(@Args('createResultInput') createResultInput: CreateResultInput) {
    return this.resultService.create(createResultInput);
  }

  @Query(() => [Result], { name: 'result' })
  findAll() {
    return this.resultService.findAll();
  }

  @Query(() => Result, { name: 'result' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.resultService.findOne(id);
  }

  @Mutation(() => Result)
  updateResult(@Args('updateResultInput') updateResultInput: UpdateResultInput) {
    return this.resultService.update(updateResultInput.id, updateResultInput);
  }

  @Mutation(() => Result)
  removeResult(@Args('id', { type: () => Int }) id: number) {
    return this.resultService.remove(id);
  }
}
