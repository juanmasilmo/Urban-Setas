import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from "sequelize-typescript";
import { ProvinceClass } from "./provinces.model";

@Table({ tableName: 'countries', timestamps: false }) // Corrección de 'timestaps' a 'timestamps'
export class CountryClass extends Model<CountryClass> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idCountry: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  countryName: string;

  @HasMany(() => ProvinceClass)
  provinces: ProvinceClass[];
}
