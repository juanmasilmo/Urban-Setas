import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique,
  Validate,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import CountryClass from "./countries.model";
import ProvinceClass from "./provinces.model";
import CityClass from "./cities.model";
import ProductClass from "./products.model";
import ClientProduct from "./clientsProducts.model";

@Table({
  tableName: "clients",
  timestamps: false,
})
class Client extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idClient: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  clientName: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  clientLastname: string;

  @Unique
  @Validate({ isEmail: true })
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  clientEmail: string;

  @Validate({ isNumeric: true })
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  clientPhone: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  clientAddress: string;

  // Relación con Ciudad
  @ForeignKey(() => CityClass)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idCity: number;

  @BelongsTo(() => CityClass)
  city: CityClass;

  // Relación con Provincia
  @ForeignKey(() => ProvinceClass)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idProvince: number;

  @BelongsTo(() => ProvinceClass)
  province: ProvinceClass;

  // Relación con País
  @ForeignKey(() => CountryClass)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idCountry: number;

  @BelongsTo(() => CountryClass)
  country: CountryClass;

  @BelongsToMany(() => ProductClass, () => ClientProduct)
  products!: ProductClass[];
}

export default Client;
