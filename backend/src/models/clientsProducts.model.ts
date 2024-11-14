import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
} from "sequelize-typescript";
import ClientClass from "./clients.model";
import ProductClass from "./products.model";

@Table({ tableName: "clientProducts", timestamps: false })
class ClientProduct extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  idClientProduct!: number;

  @ForeignKey(() => ClientClass)
  @Column(DataType.INTEGER)
  clientId!: number;

  @ForeignKey(() => ProductClass)
  @Column(DataType.INTEGER)
  productId!: number;

  @Column(DataType.INTEGER)
  quantitySold!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  date!: Date;

  // Relación con ClientClass usando alias "client"
  @BelongsTo(() => ClientClass, "clientId")
  client!: ClientClass;

  // Relación con ProductClass usando alias "product"
  @BelongsTo(() => ProductClass, "productId")
  product!: ProductClass;
}

export default ClientProduct;
