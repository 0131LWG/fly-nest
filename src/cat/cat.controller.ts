import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  Query,
  HttpCode,
  DefaultValuePipe,
  ParseIntPipe,
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
    await this.catsService.post(createCatDto);
    return SUCCESS_RES();
  }

  @Get('list')
  @ApiOperation({
    summary: '获取所有猫',
  })
  async list(
    @Query('current', new DefaultValuePipe(1), ParseIntPipe) current: number,
    @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
  ) {
    return SUCCESS_RES(await this.catsService.list(current, pageSize));
  }

  @Get('get/:id')
  @ApiOperation({
    summary: '获取一只猫',
  })
  async get(@Param('id') id: number) {
    return SUCCESS_RES(await this.catsService.get(id));
  }

  @Delete('delete/:id')
  @ApiOperation({
    summary: '删除一只猫',
  })
  async delete(@Param('id') id: number) {
    const res = await this.catsService.delete(id);
    if (res.affected === 0)
      throw new HttpException('id错误', HttpStatus.NOT_FOUND);
    return SUCCESS_RES();
  }

  @Put('update')
  @HttpCode(200)
  @ApiOperation({
    summary: '更新猫信息',
  })
  async put(@Body() updateCatDto: UpdateCatDto) {
    const res = await this.catsService.put(updateCatDto);
    // 手动控制错误提示
    if (res.affected === 0)
      throw new HttpException('id错误', HttpStatus.NOT_FOUND);
    return SUCCESS_RES();
  }
}
