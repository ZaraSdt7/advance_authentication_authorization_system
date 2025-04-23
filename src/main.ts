import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform:true}))
  app.enableCors();
  app.use(helmet())
  const config = new DocumentBuilder()
  .setTitle('Advance Authentication and Authorization System')
  .setDescription('A full-featured authentication and authorization system built with NestJS and TypeORM.')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
  Logger.log(`🚀 Application is running on: ${await app.getUrl()}`);
}
bootstrap();
