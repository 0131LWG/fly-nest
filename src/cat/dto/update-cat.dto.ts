import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// 用于存放数据传输对象类，用于在不同层中传数据，只描述数据结构
// 看到有class-validator库，是否可以在这里做数据类型校验
export class UpdateCatDto extends PartialType(CreateCatDto) {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 0, description: '猫id' })
  id: number;
}
