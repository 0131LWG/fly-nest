import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // 创建App服务，一个新的nest.js应用实例
  const app = await NestFactory.create(AppModule);

  // 使用全局管道，用于Controller层参数校验
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription('fly-nest 接口文档')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // 监听端口
  await app.listen(3000);
}
bootstrap();
