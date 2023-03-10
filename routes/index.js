const express = require('express');
const Controller = require('../controllers/controllers');
const { checkedIsLogin, checkIsAdmin, checkIsUser } = require('../middlewares/auth');
const route = express.Router();
const authRoute = require('./auth');

route.use('/user', authRoute);

route.use(checkedIsLogin);
// route.use(checkIsUser)
route.get('/', checkIsUser,Controller.userHome);

route.get('/book/detail/:id',checkIsUser, Controller.bookDetail);
route.get('/borrow/:id', checkIsUser,Controller.borrowBook);
route.get('/mybook',checkIsUser, Controller.myBook);
route.get('/profile',checkIsUser, Controller.renderUserProfile);
route.get('/profile/edit',checkIsUser, Controller.renderUserEditProfile);
route.post('/profile/edit',checkIsUser, Controller.postEditProfile);
route.get('/returnBook/:id',checkIsUser, Controller.returnBook);


// middleware untuk cek role admin
route.use(checkIsAdmin);
route.get('/admin', Controller.homeAdmin);
route.get('/admin/addBook', Controller.adminAddBook);
route.post('/admin/addBook', Controller.postAdminAddbook);
route.get('/admin/addCategory', Controller.adminAddCategory);
route.post('/admin/addCategory', Controller.postAdminAddCategory);
// route.post('/admin/addCategory', Controller.postAdminAddCategory);

module.exports = route;
