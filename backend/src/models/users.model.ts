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

  // Eliminamos userName y email, ya no serán necesarios en la tabla users.
  // userName: string;
  // email: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  password: string;

  // Relación: un Usuario pertenece a un Rol
  @ForeignKey(() => RolClass)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idRol: number; // Clave foránea que referencia a RolClass

  @BelongsTo(() => RolClass)
  role: RolClass;

  // Nueva relación: un Usuario pertenece a un Cliente
  @ForeignKey(() => ClientClass)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idClient: number; // Clave foránea que referencia a ClientClass

  @BelongsTo(() => ClientClass)
  client: ClientClass; // Obtenemos los datos del cliente asociado
}
