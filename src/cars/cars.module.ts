import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Cars } from './cars.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  imports: [SequelizeModule.forFeature([Cars])],
})
export class CarsModule {}
