import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignupInput } from './dto/signup.input';
import { AuthResponse } from './types/auth-response.type';
import { LoginUserInput } from './dto/login-user.input';
import { User } from '../users/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';

@Resolver()
export class AuthResolver {

    constructor(
        private readonly authService: AuthService
    ) { }

    @Mutation( () => AuthResponse, {name: 'signup'})
       async signup(
        @Args('signupInput') signupInput: SignupInput
        ): Promise<AuthResponse> {
            return this.authService.signup(signupInput);
            }

        @Mutation( () => AuthResponse, {name: 'login'})
       async login(
        @Args('loginInput') loginUserInput: LoginUserInput
        ): Promise<AuthResponse> {
            return this.authService.login(loginUserInput)
            }      

    
        @Query( () => AuthResponse, {name: 'revalidate'})
        @UseGuards(JwtAuthGuard)
        revalidateToken(
            // @CurrentUser() user: User
        ): AuthResponse {
            // return this.authService.revalidateToken(user)
            throw new Error('No implementado del revalidate')
        }

}
