const checkedIsLogOut = (req, res, next) => {
  if (req.session.role) {
      res.redirect(`/`)
    }
    else {
      next()
    }
}

const checkedIsLogin = (req, res, next) => {
  if (!req.session.role) {
    // const errMessage = 'Please Login First'
    res.redirect(`/login`)
  } else {
    next()
  }
}

module.exports = {checkedIsLogOut, checkedIsLogin}