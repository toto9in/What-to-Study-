import { Sequelize } from "sequelize";
import { sequelize } from "../db/connection";

const User = sequelize.define('user', {
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    firebase_uid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  export { User }