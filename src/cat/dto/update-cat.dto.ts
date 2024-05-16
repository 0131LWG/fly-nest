import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

// 用于存放数据传输对象类，用于在不同层中传数据，只描述数据结构
// 看到有class-validator库，是否可以在这里做数据类型校验
export class UpdateCatDto extends PartialType(CreateCatDto) {
  id: number;
}
