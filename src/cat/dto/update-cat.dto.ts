import { IsNumber, IsString, IsIn, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// 用于存放数据传输对象类，用于在不同层中传数据，只描述数据结构
// 看到有class-validator库，是否可以在这里做数据类型校验
export class UpdateCatDto {
  @IsNumber()
  @ApiProperty({ example: 0, description: '猫id' })
  id: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '奶球', description: '猫名称' })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '美短', description: '猫分类' })
  category?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ example: 2, description: '猫年龄' })
  age?: number;

  @IsOptional()
  @IsIn([0, 1, 2], { message: '请选择0-未知或1-男、2-女' })
  @ApiPropertyOptional({ example: 1, description: '猫性别' })
  sex?: number; // 0-未知 1-男 2-女
}
