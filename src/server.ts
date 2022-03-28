import express, { Application } from 'express'
import fileupload from 'express-fileupload'
import mysqldb from './db/mysql_connection'
import { MODE, PORT } from './environment'
import UserRouter from './services/users/route'

export default class Server {
  private server: Application

  constructor() {
    this.server = express()
    this.databases()
    this.middlewares()
    this.routes()
  }

  private async databases() {
    try {
      mysqldb.authenticate()
      console.log('database connected')
    } catch (err) {
      throw new Error('Database error')
    }
  }

  private middlewares() {
    this.server.use(express.json())
    this.server.use(fileupload())
  }

  private routes() {
    this.server.use(UserRouter())
  }

  public start() {
    this.server.listen(PORT)

    if (MODE == 'DEVELOPMENT')
      console.log(`Server running in http://localhost:${PORT}/`)
  }
}
