/* jshint esversion:6 */
const mysql = require('mysql')

    const connect = mysql.createConnection({
        host:'localhost',
        user : 'root',
        password : '',
        database: 'myblog',
        multipleStatements: true // 执行多条sql语句
    })
module.exports = connect