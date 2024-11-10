import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasOne,
  BelongsToMany,
} from "sequelize-typescript";
import ClientClass from "./clients.model";
import ClientProduct from "./clientsProducts.model";
import Stock from "./stock.model";

@Table({ tableName: "products", timestamps: false })
class ProductClass extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  idProduct!: number;

  @Column(DataType.STRING(100))
  productName!: string;

  @Column(DataType.DECIMAL(10, 2))
  price!: number;

  @BelongsToMany(() => ClientClass, () => ClientProduct)
  clients!: ClientClass[];

  @HasOne(() => Stock)
  stock!: Stock;
}

export default ProductClass;
