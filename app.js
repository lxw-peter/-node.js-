/* jshint esversion:6 */
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const fs = require('fs')
const path = require('path')
// const router = require('./router/router')
const app = express()
// 注册后 session 中间件，只要访问到 req 就能用到 req.session
app.use(
    session({
    secret: '加密狗',
    resave: false,
    saveUninitialized: true,
    //   cookie: { secure: true }
    })
)
// 设置模板引擎名称
app.set('view engine', 'ejs')
// 设置模板页面存放路径
app.set('views', './views')
// 静态资源托管
app.use('/public',express.static('./public'))
app.use('/upload',express.static('./upload'))
app.use(bodyParser.urlencoded({ extended:true }))
// 使用循环将路由模块自动注册
fs.readdir(path.join(__dirname,'./router'), (err, filenames) => {
    if (err) console.log('读取路由失败')
    filenames.forEach(filename => {
        const router = require(path.join(__dirname,'./router', filename))
        app.use(router)
    })
})

app.listen(3100, () =>{
    console.log('running:http://localhost:3100')
})

