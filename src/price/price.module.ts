import { Module } from '@nestjs/common';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';
import sequelize from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { Price } from './price.model';

@Module({
  controllers: [PriceController],
  providers: [PriceService],
  imports: [SequelizeModule.forFeature([Price])],
})
export class PriceModule {}
