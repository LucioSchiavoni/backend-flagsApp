import { ExecutionContext, InternalServerErrorException, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";


export const CurrentUser = createParamDecorator( 
    (context: ExecutionContext) => {
        const ctx = GqlExecutionContext.create(context);
        const user = ctx.getContext().req.user;

        if(!user) {
            console.log('Error del !user que no existe en el current')
        }

        return user;
}) 