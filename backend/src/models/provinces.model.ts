import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import CountryClass from "./countries.model";
import CityClass from "./cities.model";

@Table({
  tableName: "provinces",
  timestamps: false,
})
class ProvinceClass extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idProvince: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  nameProvince: string;

  @ForeignKey(() => CountryClass)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idCountry: number;

  @BelongsTo(() => CountryClass)
  country: CountryClass;

  @HasMany(() => CityClass)
  cities: CityClass[];
}

export default ProvinceClass;
