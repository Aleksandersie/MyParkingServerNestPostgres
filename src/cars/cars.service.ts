import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cars } from './cars.model';
import { CarsDto } from './dto/cars.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Cars) private carsRepo: typeof Cars) {}

  async createCar(dto: CarsDto) {
    const car = await this.carsRepo.create(dto);
    return car;
  }
  async getCars() {
    const cars = this.carsRepo.findAll();
    return cars;
  }
}
