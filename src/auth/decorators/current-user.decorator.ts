import { ExecutionContext, InternalServerErrorException, createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request ? request.user : undefined;

    if (!user) {
      console.log('Error: No se encontró el usuario en el contexto');
  
      throw new InternalServerErrorException('Usuario no encontrado en el contexto');
    }

    return user;
  },
);
