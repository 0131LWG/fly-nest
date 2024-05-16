import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 作用是处理请求并返回响应
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
