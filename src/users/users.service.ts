import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  
  async create(createUserInput: CreateUserInput): Promise<User>{
    try {

      const newUser = this.userRepository.create({
        ...createUserInput, 
        password: bcrypt.hashSync(createUserInput.password, 10)
      });
      return this.userRepository.save(newUser);
    } catch (error) {
      console.log(error)
    }
  }

  async findAll(): Promise<User[]> {
    return [];
  }

  async findOne(username: string): Promise<User>{
    try {
        return this.userRepository.findOneByOrFail({username})
    } catch (error) {
      console.log(error)
      
    }
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  block(id: number): Promise<User> {
    throw new Error(`Block method not implemented`);
  }

   async findOneById(id: number): Promise<User>{
    try {
        return this.userRepository.findOneByOrFail({id})
    } catch (error) {
      console.log(error)
      
    }
  }


}
