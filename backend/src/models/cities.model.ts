import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import ProvinceClass from "./provinces.model";

@Table({
  tableName: "cities",
  timestamps: false,
})
class City extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idCity: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  cityName: string;

  @ForeignKey(() => ProvinceClass)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idProvince: number;

  @BelongsTo(() => ProvinceClass)
  province: ProvinceClass;
}

export default City;
