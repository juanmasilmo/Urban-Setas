import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  BelongsToMany,
} from "sequelize-typescript";
import ClientClass from "./clients.model";
import ClientProduct from "./clientsProducts.model";

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

  @Column(DataType.INTEGER)
  quantity!: number; // Añadimos la cantidad directamente en el producto

  @BelongsToMany(() => ClientClass, () => ClientProduct)
  clients!: ClientClass[];
}

export default ProductClass;
