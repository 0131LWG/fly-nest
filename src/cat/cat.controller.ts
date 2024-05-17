import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { SUCCESS_RES } from '../request/resWrapper';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('cat')
@ApiTags('猫相关接口')
export class CatController {
  constructor(private catsService: CatService) {}

  @Post('add')
  @ApiOperation({
    summary: '新增猫',
  })
  @ApiResponse({
    status: 200,
    description: '成功',
    schema: {
      type: 'object',
      example: {
        code: 200,
        msg: 'success',
      },
    },
  })
  async post(@Body() createCatDto: CreateCatDto) {
    return SUCCESS_RES(this.catsService.post(createCatDto), 'success');
  }

  @Get('list')
  @ApiOperation({
    summary: '获取所有猫',
  })
  async list() {
    return SUCCESS_RES(this.catsService.list());
  }

  @Get('get/:id')
  @ApiOperation({
    summary: '获取一只猫',
  })
  async get(@Param('id') id: number) {
    return SUCCESS_RES(this.catsService.get(id));
  }

  @Delete('delete/:id')
  @ApiOperation({
    summary: '删除一只猫',
  })
  async delete(@Param('id') id: number) {
    return SUCCESS_RES(this.catsService.delete(id));
  }

  @Put('update')
  @HttpCode(200)
  @ApiOperation({
    summary: '更新猫信息',
  })
  put(@Body() updateCatDto: UpdateCatDto) {
    const res = this.catsService.put(updateCatDto);
    // 手动控制错误提示
    if (!res) throw new HttpException('cat is not found', HttpStatus.NOT_FOUND);
    return SUCCESS_RES(res);
  }
}
