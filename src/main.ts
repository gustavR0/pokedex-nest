import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // solo deja la data que existe en el dto data adicional es ignorada
      forbidNonWhitelisted: true, // manda error de los atributos que no son aceptados en caso de que no existan en el dto
    }),
  );

  await app.listen(3000);
}
bootstrap();
