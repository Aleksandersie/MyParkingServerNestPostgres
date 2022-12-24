import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface PriceCreationAttributes {
  price: number;
}

@Table({ tableName: 'price' })
export class Price extends Model<Price, PriceCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({ type: DataType.INTEGER })
  price: number;
}
