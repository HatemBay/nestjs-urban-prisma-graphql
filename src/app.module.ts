import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UsersModule } from './users/users.module';
import { GraphQLDateTime } from 'graphql-iso-date';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AbilityGuard } from './ability/ability.guard';
import { AbilityModule } from './ability/ability.module';
import { ConfigModule } from '@nestjs/config';
import GraphQLJSON from 'graphql-type-json';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: false,
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
      resolvers: { DateTime: GraphQLDateTime, JSON: GraphQLJSON },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 20,
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
    ]),
    UsersModule,
    PrismaModule,
    AuthModule,
    AbilityModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AbilityGuard,
    },
  ],
})
export class AppModule {}
