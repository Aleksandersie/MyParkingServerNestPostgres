import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { CarsModule } from './cars/cars.module';
import { ConfigModule } from '@nestjs/config';
import { Cars } from './cars/cars.model';
import { PriceModule } from './price/price.module';
import { Price } from './price/price.model';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Cars, Price],
      autoLoadModels: true,
    }),
    CarsModule,
    PriceModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
