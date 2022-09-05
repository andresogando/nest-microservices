/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 4040,
        retryAttempts: 5,
      },
    }
  );

  await app.listen();
  Logger.log(`🚀 Sample-Communication Microservice is running`);
}

bootstrap();
