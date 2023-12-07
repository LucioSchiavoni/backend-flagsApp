import { ExecutionContext, Injectable, InternalServerErrorException, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";


export const CurrentUser = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        console.log('Contexto:', context);
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        const user = req ? req.user : undefined;

        if (!user) {
            console.log('Error: No se encontró el usuario en el contexto');
        }

        return user;
    }
);
