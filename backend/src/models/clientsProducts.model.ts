import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";
import ClientClass from "./clients.model";
import ProductClass from "./products.model";

@Table({ tableName: "client_products", timestamps: false })
class ClientProduct extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idClientProduct!: number;

  @ForeignKey(() => ClientClass)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  clientId!: number;

  @ForeignKey(() => ProductClass)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantitySold!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  date!: Date;
}

export default ClientProduct;
