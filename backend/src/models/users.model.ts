import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import RolClass from "./roles.model";
import ClientClass from "./clients.model"; // Importamos el modelo Client

@Table({
  tableName: "users",
  timestamps: false,
})
export default class UserClass extends Model<UserClass> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idUser: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  password: string;

  // Relación: un Usuario pertenece a un Rol
  @ForeignKey(() => RolClass)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  idRol: number;

  @BelongsTo(() => RolClass)
  role: RolClass;

  // Relación: un Usuario pertenece a un Cliente (uno a uno)
  @ForeignKey(() => ClientClass)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idClient: number;
//pertenece a la clase clients
  @BelongsTo(() => ClientClass)
  client: ClientClass;
}
