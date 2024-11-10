import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";
import ProductClass from "./products.model";

@Table({ tableName: "stock", timestamps: false })
class Stock extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  idStock!: number;

  @ForeignKey(() => ProductClass)
  @Column(DataType.INTEGER)
  productId!: number;

  @BelongsTo(() => ProductClass)
  product!: ProductClass;

  @Column(DataType.INTEGER)
  quantity!: number;
}

export default Stock;
