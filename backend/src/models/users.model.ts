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
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import RolClass from "./roles.model";

@Table({
  tableName: "users",
  timestamps: false, // Cambiado a 'false' para consistencia
})
class UsersClass extends Model<UsersClass> {
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
  name: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  lastname: string;

  @Unique
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  @Validate({
    isEmail: true, // Valida que el formato sea de email
  })
  email: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  @Validate({
    isNumeric: true, // Valida que contenga solo números
  })
  phone: string;

  @ForeignKey(() => RolClass)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idRol: number;

  @BelongsTo(() => RolClass) // Establece la relación entre User y Rol
  rol: RolClass; // Este será el objeto Rol relacionado
}

export default UsersClass;
