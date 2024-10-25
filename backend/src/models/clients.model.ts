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
} from "sequelize-typescript";

@Table({
  tableName: "clients",
  timestamps: true, //es para poder añadir createdAT y UpdatedAT
})
class ClientClass extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  idClient: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  clientName: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  clientLastname: string;

  @Unique
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    validate: {
      isEmail: true, //para validar que el formato sea email
    },
  })
  clientEmail: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    validate: {
      isNumeric: true, // para validar que tenga solo num
    },
  })
  clientPhone: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  clientAddress: string;
}
export default ClientClass;
