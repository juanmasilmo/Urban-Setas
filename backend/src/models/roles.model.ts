import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";

@Table({
  tableName: "roles",
  timestamps: false, // Cambiado a 'false' para consistencia con otros modelos
})
class RolClass extends Model<RolClass> {
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
