import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  post(cat: CreateCatDto) {
    const min = 1;
    const max = 1000000000;
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    const catItem: Cat = { id, ...cat };
    this.cats.push(catItem);
  }

  list(): Cat[] {
    return this.cats;
  }

  get(id: number): Cat | undefined {
    const cat = this.cats.find((item) => item.id === id);
    if (!cat) return;
    return cat;
  }

  delete(id: number) {
    const catIndex = this.cats.findIndex((item) => item.id === id);
    if (catIndex === -1) return;
    this.cats.splice(catIndex, 1);
    return this.cats;
  }

  put(cat: UpdateCatDto) {
    const catIndex = this.cats.findIndex((item) => item.id === cat.id);
    if (catIndex === -1) return;
    const updateCat = { ...this.cats[catIndex], ...cat };
    this.cats.splice(catIndex, 1, updateCat);
    return this.cats;
  }
}
