import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResultInput } from './dto/create-result.input';
import { UpdateResultInput } from './dto/update-result.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from './entities/result.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ResultService {

  constructor(
    @InjectRepository(Result) private resultRepository: Repository<Result>,
    private readonly userService: UsersService,
  ){}
  
  
  async create(createResultInput: CreateResultInput) {
    const { userId, ...resultData} = createResultInput;
    
    const user = await this.userService.findOneById(userId)
    if(!user){
      throw new NotFoundException(`Usuario con ID ${userId} no encontrado.`)
    }
    const newResult = this.resultRepository.create({
      ...resultData,
      user
    });
    return this.resultRepository.save(newResult);
  }

  async findAll(): Promise<Result[]> {
    return [];
  }

  findOne(id: number) {
    return `This action returns a #${id} result`;
  }

  update(id: number, updateResultInput: UpdateResultInput) {
    return `This action updates a #${id} result`;
  }

  remove(id: number) {
    return `This action removes a #${id} result`;
  }
}
