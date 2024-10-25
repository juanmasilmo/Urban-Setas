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

@Table({
  tableName: "roles",
  timestamps: true,
})
class RolClass extends Model {
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
}
export default RolClass;
