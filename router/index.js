/* jshint esversion:6 */
// 首页相关路由
const express = require('express')
const router = express.Router()
const service = require('../controller/index.js')


// 路由处理
// 首页
router.get('/', service.showIndex)

// 注销
router.get('/logout', service.logout)

// 进入登录页面
router.get('/login',  service.toLogin)
// 进入注册页面
router.get('/register',  service.toRegister)
module.exports = router