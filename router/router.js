/* jshint esversion:6 */
const express = require('express')
const router = express.Router()
const service = require('../controller/service.js')
// const db = require('./db.js')

// 登录页提交表单
router.post('/login',  service.login)
// 注册页面提交表单
router.post('/register',  service.register)
// 获取所有文章列表
// router.get('/articles',service.allArticles)

// 编辑文章
// router.put('/articles/article', service.editArticle)
// 删除文章
// router.delete('/articles/article/:id', service.deleteArticle)
// 导出路由
module.exports = router
