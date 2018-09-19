/* jshint esversion:6 */
// 文章页面相关路由
const express = require('express')
const router = express.Router()
const service = require('../controller/service.js')

// 进入新增文章页面
router.get('/article/add', service.addArticlePage)
// 提交文章
router.post('/article/add', service.addArticle)
// 进入文章详情页面
router.get('/article/info/:id', service.articlePage)
// 进入文章编辑页面
router.get('/article/edit/:id', service.editArticlePage)
// 更新文章提交
router.post('/article/edit/:id', service.editArticle)

module.exports = router