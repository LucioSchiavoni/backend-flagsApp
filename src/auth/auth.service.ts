import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignupInput } from './dto/signup.input';
import { AuthResponse } from './types/auth-response.type';
import { LoginUserInput } from './dto/login-user.input';
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
@Injectable()
export class AuthService {
    constructor( 
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
        ) {}

    private getJwtToken(userId: string) {
        return this.jwtService.sign({id: userId})
    }

   async signup( signupInput: SignupInput) : Promise<AuthResponse> {
    const user = await this.userService.create(signupInput)
    
    const token = this.getJwtToken(user.id)

    return { token, user}
   }

   async login(loginUserInput: LoginUserInput) : Promise<AuthResponse>{
    const {username, password} = loginUserInput;
    const user = await this.userService.findOne(username)

    if ( !bcrypt.compareSync(password, user.password)){
        throw new BadRequestException('Email / Password Incorrecto')
    }

    const token = this.getJwtToken(user.id)

    return {
        token,
        user
    }
   }

   async validateUser (id: string): Promise<User> {
        const user = await this.userService.findOneById(id)
        
        delete user.password;

        return user;


}

    revalidateToken( user: User): AuthResponse {

        const token = this.getJwtToken(user.id)
        return {
            token, 
            user
        }
    }

}