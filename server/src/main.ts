import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as http from 'http';
import * as https from 'https';
import * as express from 'express';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(__dirname + '/../secrets/key.pem'),
    cert: fs.readFileSync(__dirname + '/../secrets/cert.pem'),
  };

  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

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

  await app.init();
  http.createServer(server).listen(4400);
  https.createServer(httpsOptions, server).listen(443);
}
bootstrap();
