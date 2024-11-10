import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from "sequelize-typescript";
import ClientClass from "./clients.model";
import ProductClass from "./products.model";

@Table({ tableName: "client_products", timestamps: false })
class ClientProduct extends Model {
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
  quantity!: number;
}

export default ClientProduct;
