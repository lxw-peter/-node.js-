/* jshint esversion:6 */
// const path = require('path')
const db = require('../db')
// 展示首页页面
const showIndex = (req, res) =>{
    // 每页文章列表数
    const pagesize = 5
    // 当前页
    const nowPage = Number(req.query.page) || 1

    let sql = `select * from articles limit ${(nowPage-1)*pagesize}, ${pagesize};
    select count(* ) as count from articles `
    db.base(sql,null,(result) =>{
        // 总页数
        const totalPages = Math.ceil(result[1][0].count / pagesize)
        if (result.length !== 2) {
            return res.render('index.ejs', {
                userInfo: req.session.userInfo,
                islogin: req.session.islogin,
                articlesList: [],
            })
        } else {
        res.render('index.ejs', {
                userInfo: req.session.userInfo,
                islogin: req.session.islogin,
                articlesList: result[0],
                totalPages: totalPages,
                nowPage: nowPage
            })
        }
    })
}
const logout = (req,res) => {
    // 删除session
    req.session.destroy(()=> {
        // 路由重定向 到首页
        res.redirect('/')
    })
}
// 跳转到注册页面
const toRegister = (req, res) => {
    res.render('register.ejs',{})
}
// 跳转到登录页面
const toLogin = (req, res) => {
    res.render('login.ejs',{})
}
module.exports  = {
    showIndex,
    toRegister,
    toLogin,
    logout
}