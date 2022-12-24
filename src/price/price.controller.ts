import { Body, Controller, Get, Put } from '@nestjs/common';
import { PriceService } from './price.service';
import { PriceDto } from './dto/price.dto';

@Controller('price')
export class PriceController {
  constructor(private priceService: PriceService) {}
  @Get()
  getPrice() {
    return this.priceService.get();
  }
  @Put()
  updatePrice(@Body() priceDto: PriceDto) {
    return this.priceService.changePrice(priceDto);
  }
}
