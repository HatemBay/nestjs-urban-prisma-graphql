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
import { ConfigModule, ConfigService } from '@nestjs/config';
import GraphQLJSON from 'graphql-type-json';
import { ThrottlerModule } from '@nestjs/throttler';
import { GqlThrottlerGuard } from './graphql/gql-throttler.guard';
import { PostsModule } from './posts/posts.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { EmailConfirmationModule } from './email/email-confirmation.module';
import { ExamplesModule } from './examples/examples.module';
import { CountriesModule } from './countries/countries.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        EMAIL_SERVICE: Joi.string().required(),
        EMAIL_USER: Joi.string().required(),
        EMAIL_PASSWORD: Joi.string().required(),
        JWT_VERIFICATION_TOKEN_SECRET: Joi.string().required(),
        JWT_VERIFICATION_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        SECRET_EXPIRATION_TIME: Joi.string().required(),
        EMAIL_CONFIRMATION_URL: Joi.string().required(),
        GOOGLE_REDIRECT_URL: Joi.string().required(),
        PORT: Joi.number().default(3001),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: false,
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
      resolvers: { DateTime: GraphQLDateTime, JSON: GraphQLJSON },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      context: ({ req, res }) => ({ req, res }),
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get('EMAIL_HOST'),
          port: 465, // true for 465
          secure: true,
          service: configService.get('EMAIL_SERVICE'),
          auth: {
            user: configService.get('EMAIL_USER'),
            pass: configService.get('EMAIL_PASSWORD'),
          },
        },
        defaults: {
          from: '"nest-modules" <modules@nestjs.com>',
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    UsersModule,
    PrismaModule,
    AuthModule,
    AbilityModule,
    PostsModule,
    EmailConfirmationModule,
    ExamplesModule,
    CountriesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useExisting: JwtAuthGuard,
    //   // TODO: confirm
    // },
    // JwtAuthGuard,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AbilityGuard,
    },
    {
      provide: APP_GUARD,
      useClass: GqlThrottlerGuard, // Note: If controller use @SkipThrottle() then use ThrottlerGuard to implement the original guard
    },
  ],
})
export class AppModule {}
