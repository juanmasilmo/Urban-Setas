import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique,
  Validate,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import RolClass from "./roles.model";

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
  userName: string;

  @Unique
  @Validate({ isEmail: true })
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  email: string;

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
}
