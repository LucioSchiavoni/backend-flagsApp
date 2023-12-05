import {AuthGuard} from '@nestjs/passport'
import { GqlExecutionContext } from '@nestjs/graphql'
import { ExecutionContext, Injectable } from '@nestjs/common'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    getRequest( context: ExecutionContext){
        const ctx = GqlExecutionContext.create(context);
        const request = ctx.getContext().req;
        return request;
    }
}