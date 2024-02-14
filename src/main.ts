import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });

  const configService = app.get(ConfigService);

  app.useBodyParser('json', { limit: '10mb' });

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  const port = configService.get('PORT');
  await app.listen(port);
  Logger.log(`App listening on port ${port}`);
}
bootstrap();
