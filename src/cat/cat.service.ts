import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto) {
    const min = 1;
    const max = 1000000000;
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    const catItem: Cat = { id, ...cat };
    this.cats.push(catItem);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
