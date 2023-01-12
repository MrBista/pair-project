const checkedIsLogOut = (req, res, next) => {
  if (req.session.userId) {
    res.redirect('/');
  } else {
    next();
  }
};

const checkedIsLogin = (req, res, next) => {
  if (!req.session.userId) {
    // const errMessage = 'Please Login First'
    res.redirect(`/user/login`);
  } else {
    next();
  }
};

const checkIsAdmin = (req, res, next) => {
  if (req.session.role !== 'admin') {
    res.redirect('/');
  } else {
    next();
  }
};


const checkIsUser = (req, res, next) => {
  if (req.session.role !== 'user') {
    res.redirect('/admin')
  } else {
    next()
  }
}

module.exports = { checkedIsLogOut, checkedIsLogin, checkIsAdmin,checkIsUser };
