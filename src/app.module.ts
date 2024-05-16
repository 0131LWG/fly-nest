import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';

// 装饰器
@Module({
  // 导入模块
  imports: [CatModule],
  // 注册控制器
  controllers: [AppController],
  // 注册服务
  providers: [AppService],
  // exports 导出模块中的类，给其他模块访问
})
export class AppModule {}
