import { Body, Controller, Post, Get } from '@nestjs/common';
import { CarsDto } from './dto/cars.dto';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Post()
  create(@Body() carsDto: CarsDto) {
    console.log(carsDto);
    return this.carsService.createCar(carsDto);
  }
  @Get()
  getCars() {
    return this.carsService.getCars();
  }
}
