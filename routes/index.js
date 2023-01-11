const express = require('express')
const Controller = require('../controllers/controllers')
const { checkedIsLogin } = require('../middlewares/auth')
const route = express.Router()
const authRoute = require('./auth')

route.use('/user',authRoute)

route.use(checkedIsLogin)

route.get('/', Controller.renderHome)
// router.get('/books')


module.exports = route