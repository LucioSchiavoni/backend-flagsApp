import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ResultModule } from './result/result.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import {TypeOrmModule} from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from './users/entities/user.entity';
import { Result } from './result/entities/result.entity';
import { UsersResolver } from './users/users.resolver';
import { UsersService } from './users/users.service';
import { ResultResolver } from './result/result.resolver';
import { ResultService } from './result/result.service';
import { AuthModule } from './auth/auth.module';
dotenv.config()

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      url: process.env.URL_DB,
            ssl: {
        rejectUnauthorized: false
      }
    }),
    TypeOrmModule.forFeature([User, Result]),
    
    UsersModule, 
    ResultModule, AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    UsersResolver, 
    UsersService, 
    ResultResolver, 
    ResultService
  ],
})
export class AppModule {}
