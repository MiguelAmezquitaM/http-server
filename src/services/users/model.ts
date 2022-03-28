/* 
 *  MODEL OF USER DATA
 *
 * 
 *  {
 *      id: ObjectId!,
 *      username: string!,
 *      password: string!,
 *      phonenumber: string,
 *      country: string,
 *      dob: timestamp,
 *  }
 */

import { DataTypes } from "sequelize"
import mysqldb from "../../db/mysql_connection"

/* MySQL */
export const User = mysqldb.define('users', {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    },
    phonenumber: {
        type: DataTypes.STRING
    },
    profile_picture: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    }
})

