//connect to a database (still in progess)

import { Sequelize } from "sequelize";

//falta passar os dados do banco local pro objecto
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
})

export { sequelize }