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
  HasOne,
} from "sequelize-typescript";
import CountryClass from "./countries.model";
import ProvinceClass from "./provinces.model";
import CityClass from "./cities.model";
import ProductClass from "./products.model";
import ClientProduct from "./clientsProducts.model";
import UserClass from "./users.model";

@Table({
  tableName: "clients",
  timestamps: false,
})
export default class ClientClass extends Model<ClientClass> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  idClient!: number;

  @Column(DataType.STRING(100))
  clientName!: string;

  @Column(DataType.STRING(100))
  clientLastname!: string;

  @Unique
  @Validate({ isEmail: true })
  @Column(DataType.STRING(100))
  clientEmail!: string;

  @Validate({ isNumeric: true })
  @Column(DataType.STRING(20))
  clientPhone!: string;

  @Column(DataType.STRING(100))
  clientAddress!: string;

  @ForeignKey(() => CityClass)
  @Column(DataType.INTEGER)
  idCity!: number;

  @BelongsTo(() => CityClass)
  city!: CityClass;

  @ForeignKey(() => ProvinceClass)
  @Column(DataType.INTEGER)
  idProvince!: number;

  @BelongsTo(() => ProvinceClass)
  province!: ProvinceClass;

  @ForeignKey(() => CountryClass)
  @Column(DataType.INTEGER)
  idCountry!: number;

  @BelongsTo(() => CountryClass)
  country!: CountryClass;

  // Relación muchos a muchos con productos
  @BelongsToMany(() => ProductClass, () => ClientProduct)
  products!: ProductClass[];

  @HasOne(() => UserClass)
  user!: UserClass;
}
