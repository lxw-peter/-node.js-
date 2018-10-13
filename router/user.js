/* jshint esversion:6 */
const express = require('express')
const router = express.Router()
const service = require('../controller/service.js')
// const db = require('./db.js')

// 登录页提交表单
router.post('/login',  service.login)
// 注册页面提交表单
router.post('/register',  service.register)
router.post('/userInfo', service.updateUserInfo)
// 导出路由
module.exports = router
