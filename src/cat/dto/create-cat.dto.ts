import { IsString, IsNumber, IsIn, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @IsNotEmpty({ message: '请选择名称' })
  @IsString()
  @ApiProperty({ example: '奶球', description: '猫名称' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '美短', description: '猫分类' })
  category: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 2, description: '猫年龄' })
  age: number;

  @IsNotEmpty()
  @IsIn([0, 1, 2], { message: '请选择0-未知或1-男、2-女' })
  @ApiProperty({ example: 1, description: '猫性别' })
  sex: number; // 0-未知 1-男 2-女
}
