const express = require('express');
const Controller = require('../controllers/controllers');
const { checkedIsLogin, checkIsAdmin } = require('../middlewares/auth');
const route = express.Router();
const authRoute = require('./auth');

route.use('/user', authRoute);

route.use(checkedIsLogin);

route.get('/', Controller.userHome);

// middleware untuk cek role admin
route.use(checkIsAdmin);
route.get('/admin', Controller.homeAdmin);
route.get('/admin/addBook', Controller.adminAddBook);
route.post('/admin/addBook', Controller.postAdminAddbook);
route.get('/admin/addCategory', Controller.adminAddCategory);
route.post('/admin/addCategory', Controller.postAdminAddCategory);

module.exports = route;
