import { Sequelize } from 'sequelize'
import { DB_NAME, MYSQL_PASSWORD, MYSQL_USER } from '../environment'

const mysqldb = new Sequelize(DB_NAME, MYSQL_USER, MYSQL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging : false
})

export default mysqldb