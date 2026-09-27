import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/app.module.js';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.getOrThrow<string>('GATEWAY_PORT');
  const origin = config.getOrThrow<string>('CORS_ORIGIN');
  app.enableCors({ origin, credentials: true });
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Gateway API')
    .setDescription('The Gateway API description')
    .setVersion('1.0')
    .addTag('gateway')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('docs', app, document, {
    jsonDocumentUrl: '/docs-json',
  });
  const logger = new Logger('Main');
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  await app.listen(port);
  logger.log(`Application is running on: http://localhost:${port}`);
  logger.log(`Swagger is running on: http://localhost:${port}/docs`);
}
await bootstrap();
