import dotenv from 'dotenv'

dotenv.config()

// Mongo DB
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/test'

// MySQL
export const MYSQL_USER = process.env.MYSQL_USER || 'usertest'
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'passwordtest'
export const DB_NAME = process.env.DB_NAME || 'dbtest'

// Express
export const PORT = process.env.PORT
export const MODE = process.env.MODE
