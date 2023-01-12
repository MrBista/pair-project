const express = require('express');
const Controller = require('../controllers/controllers');
const { checkedIsLogin, checkIsAdmin } = require('../middlewares/auth');
const route = express.Router();
const authRoute = require('./auth');

route.use('/user', authRoute);

route.use(checkedIsLogin);

route.get('/', Controller.renderHome);

// middleware untuk cek role admin
route.use(checkIsAdmin);
route.get('/admin', (req, res) => {
  res.send('ini admin ges');
});

module.exports = route;
