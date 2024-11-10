import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from "sequelize-typescript";
import UserClass from "./users.model";

@Table({
  tableName: "roles",
  timestamps: false,
})
export default class RolClass extends Model<RolClass> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idRol: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  rolName: string;

  // Relación: un Rol puede tener varios Usuarios
  @HasMany(() => UserClass)
  users: UserClass[];
}
