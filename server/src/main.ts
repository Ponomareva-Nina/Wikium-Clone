import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(__dirname + '/../secrets/key.pem'),
    cert: fs.readFileSync(__dirname + '/../secrets/cert.pem'),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.enableCors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'https://localhost:3000',
      'https://ponomareva-nina.github.io',
      'https://ponomareva-nina.github.io/Wikium-Clone',
    ],
  });

  const config = new DocumentBuilder()
    .setTitle('RSSchool Wikium Clone API')
    .setDescription('Wikium Clone API')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(4400);
}
bootstrap();
