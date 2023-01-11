const express = require('express')
const Controller = require('../controllers/controllers')
const { checkedIsLogin } = require('../middlewares/auth')
const route = express.Router()
const authRoute = require('./auth')

route.use('/',authRoute)

route.use(checkedIsLogin)

route.get('/', Controller.renderHome)


module.exports = route