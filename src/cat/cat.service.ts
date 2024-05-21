import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatService {
  constructor(@InjectRepository(Cat) private cats: Repository<Cat>) {}

  post(cat: CreateCatDto) {
    this.cats.insert(cat);
  }

  list(current: number, pageSize: number) {
    return this.cats.find({
      skip: (current - 1) * pageSize, // 跳过多少页
      take: pageSize, // 当前页数
    });
  }

  get(id: number) {
    return this.cats.findOne({ where: { id } });
  }

  delete(id: number) {
    return this.cats.delete(id);
  }

  put(cat: UpdateCatDto) {
    return this.cats.update(cat.id, cat);
  }
}
