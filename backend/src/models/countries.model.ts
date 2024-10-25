import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from "sequelize-typescript";
import {  ProvinceClass  } from "./provinces.model";

@Table({ tableName: 'countries', timestaps: false})

class CountryClass extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({ type:DataType.INTEGER })
    idCountry: number;
    @Column({
        type:DataType.STRING(100), allowNull:false
    })
    countryName:string;

    @HasMany(() => ProvinceClass)
    provinces: ProvinceClass[];
}
export default CountryClass;