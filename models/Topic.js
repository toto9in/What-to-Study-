import { Sequelize } from "sequelize";
import { sequelize } from "../db/connection";
import { Subject } from "./Subject";

const Topic = sequelize.define('topic', {
    topic_id: {
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
  
  Topic.belongsTo(Subject, { foreignKey: 'subject_id' });

  export { Topic }