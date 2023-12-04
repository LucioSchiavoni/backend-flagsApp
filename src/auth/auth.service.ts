import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignupInput } from './dto/signup.input';
import { AuthResponse } from './types/auth-response.type';
import { LoginUserInput } from './dto/login-user.input';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor( private readonly userService: UsersService) {}

   async signup( signupInput: SignupInput) : Promise<AuthResponse> {
    const user = await this.userService.create(signupInput)

    const token = 'ABC123';

    return { token, user}
   }

   async login(loginUserInput: LoginUserInput) : Promise<AuthResponse>{
    const {username, password} = loginUserInput;
    const user = await this.userService.findOne(username)

    if ( !bcrypt.compareSync(password, user.password)){
        throw new BadRequestException('Email / Password Incorrecto')
    }

    const token = 'Abc123'

    return {
        token,
        user
    }
   }

}
