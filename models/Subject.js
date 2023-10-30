import { Sequelize } from "sequelize";
import { sequelize } from "../db/connection";
import { User } from "./User";

const Subject = sequelize.define('subject', {
    subject_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  
  Subject.belongsTo(User, { foreignKey: 'user_id' });

export { Subject }