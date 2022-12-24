import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Price } from './price.model';
import { PriceDto } from './dto/price.dto';

@Injectable()
export class PriceService {
  constructor(@InjectModel(Price) private priceRepo: typeof Price) {}

  async get() {
    const price = await this.priceRepo.findOne();
    return price;
  }
  async changePrice(dto: PriceDto) {
    const price = await this.priceRepo.findOne();
    await price.update({
      price: dto.price,
    });
  }
}
