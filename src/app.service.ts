import { Injectable } from '@nestjs/common';

// 业务代码编写的地方，提供业务逻辑并和其他服务交互
@Injectable() // 标记服务类
export class AppService {
  getHello(): string {
    return 'Hello World!!!';
  }
}
