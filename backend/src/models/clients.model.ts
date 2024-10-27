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
  timestamps: false, // Ajustado a 'false' para omitir createdAt y updatedAt
})
class ClientClass extends Model<ClientClass> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
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
  })
  @Validate({
    isEmail: true, // Valida que el formato sea de email
  })
  clientEmail: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  @Validate({
    isNumeric: true, // Valida que contenga solo números
  })
  clientPhone: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  clientAddress: string;
}

export default ClientClass;
