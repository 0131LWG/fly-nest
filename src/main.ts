import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 创建App服务，一个新的nest.js应用实例
  const app = await NestFactory.create(AppModule);
  // 监听端口
  await app.listen(3000);
}
bootstrap();
