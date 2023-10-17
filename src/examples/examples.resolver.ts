import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExamplesService } from './examples.service';
import { CreateExampleInput } from './dto/create-example.input';
import { UpdateExampleInput } from './dto/update-example.input';

@Resolver('Example')
export class ExamplesResolver {
  constructor(private readonly examplesService: ExamplesService) {}

  @Mutation('createExample')
  create(@Args('createExampleInput') createExampleInput: CreateExampleInput) {
    return this.examplesService.create(createExampleInput);
  }

  @Query('examples')
  findAll() {
    return this.examplesService.findAll();
  }

  @Query('example')
  findOne(@Args('id') id: number) {
    return this.examplesService.findOne(id);
  }

  @Mutation('updateExample')
  update(@Args('updateExampleInput') updateExampleInput: UpdateExampleInput) {
    return this.examplesService.update(updateExampleInput.id, updateExampleInput);
  }

  @Mutation('removeExample')
  remove(@Args('id') id: number) {
    return this.examplesService.remove(id);
  }
}
