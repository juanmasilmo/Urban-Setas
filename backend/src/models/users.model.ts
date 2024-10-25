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
  timestamps: true,
})
class UsersClass extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
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
    validate: {
      isEmail: true,
    },
  })
  email: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  })
  phone: string;

  @ForeignKey(() => RolClass)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  })
  idRol: number;

  @BelongsTo(() => RolClass) // Esto establece la relación entre Client y Rol
  rol: RolClass; // Este será el objeto Rol relacionado
}
export default UsersClass;
