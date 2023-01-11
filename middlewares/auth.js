const checkedIsLogOut = (req, res, next) => {
  if (req.session.userId) {
    res.redirect(`/`)
  } else {
    next()
  }
}

const checkedIsLogin = (req, res, next) => {
  if (!req.session.userId) {
    // const errMessage = 'Please Login First'
    res.redirect(`/user/login`)
  } else {
    next()
  }
}

module.exports = {checkedIsLogOut, checkedIsLogin}