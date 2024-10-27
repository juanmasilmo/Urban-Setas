import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    Unique,
    AllowNull,
    Validate,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
import { ProvinceClass } from "./provinces.model";

@Table ({tableName: 'cities', timestamps:false})
export class CityClass extends Model<CityClass> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER, allowNull:false
    })
    idCity: number;

        @Column({
            type:DataType.STRING(100), allowNull:false
        })
        cityName: string;

        @ForeignKey(()=> ProvinceClass)
        @Column({type:DataType.INTEGER, allowNull:false})
        idProvince:number;

        @BelongsTo(()=> ProvinceClass)
        province: ProvinceClass;
}