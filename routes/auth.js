const express = require('express');
const ControllerAuth = require('../controllers/controllerAuth');
const { checkedIsLogOut } = require('../middlewares/auth');

const route = express.Router();
route.get('/logout', ControllerAuth.getLogOut);
route.use(checkedIsLogOut);

route.get('/login', ControllerAuth.renderLogin);

route.post('/login', ControllerAuth.postLogin);

route.get('/register', ControllerAuth.renderRegister);

route.post('/register', ControllerAuth.postRegister);

module.exports = route;
