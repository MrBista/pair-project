const {User} = require('../models')
const bcrypt = require('bcryptjs')
class ControllerAuth {

  static renderLogin(req, res) {
    const {error} = req.query
    res.render('login', {error})
  }

  static postLogin(req, res) {
    const {email, password} = req.body
    User.findOne({
      where:{
      email
    }})
    .then((user) => {
      if (user) {
        const isValidPassword = bcrypt.compareSync(password, user.password)
        if (isValidPassword) {
       ;
          // req.session.userId = user.id
          req.session.role=user.role;
          console.log(user.role);
          return res.redirect('/')
        } else {
          const errorMessage = 'Invalid username/password'
          return res.redirect(`/login?error=${errorMessage}`)
        }
      }else {
        const errorMessage = `There is no user with email ${email}`
        return res.redirect(`/login?error=${errorMessage}`)
      }

    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })
    
  }

  static renderRegister(req, res) {
    res.render('register')
  }

  static postRegister(req, res) {
    console.log(req.body)
    const {name, email, password, role} = req.body
    
    User.create({name, email, password, role})
    .then((result) => {
      res.redirect('/user/login')
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })
  }

  static getLogOut(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err)
      } else {
        res.redirect('/login')
      }
    })
  }
}

module.exports = ControllerAuth