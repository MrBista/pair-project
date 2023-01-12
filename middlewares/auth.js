const checkedIsLogOut = (req, res, next) => {
  if (req.session.userId) {
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

module.exports = { checkedIsLogOut, checkedIsLogin, checkIsAdmin };
