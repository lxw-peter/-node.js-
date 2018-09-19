/* jshint esversion:6 */
const mysql = require('mysql')
exports.base = (sql,data,callback) =>{
    const conn = mysql.createConnection({
        host:'localhost',
        user : 'root',
        password : '',
        database: 'myblog',
        multipleStatements: true // 执行多条sql语句
    })
    // 执行连接操作
    conn.connect()
    conn.query(sql,data,(err,result) =>{
        if (err) return console.log(err.message)
        callback(result)
    })
    // 关闭数据库
    conn.end()
}