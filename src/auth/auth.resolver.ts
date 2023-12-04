import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignupInput } from './dto/signup.input';
import { AuthResponse } from './types/auth-response.type';
import { LoginUserInput } from './dto/login-user.input';
import { User } from 'src/users/entities/user.entity';

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

    
    //     @Query( , {name: 'revalidate'})
    //     async revalidateToken(){
    //         // return this.authService.revalidateToken()
    //     }

}
