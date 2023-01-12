const { User } = require('../models');
const bcrypt = require('bcryptjs');
const { sendEmail } = require('../helpers/send_email');
class ControllerAuth {
  static renderLogin(req, res) {
    const { error } = req.query;
    res.render('login', { error });
  }

  static postLogin(req, res) {
    const { email, password } = req.body;
    User.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (user) {
          const isValidPassword = bcrypt.compareSync(password, user.password);
          if (isValidPassword) {
            req.session.userId = user.id;
            req.session.role = user.role;
            req.session.email = user.email;
            if (user.role === 'admin') {
              return res.redirect('/admin');
            } else {
              return res.redirect('/');
            }
          } else {
            const errorMessage = 'Invalid username/password';
            return res.redirect(`/user/login?error=${errorMessage}`);
          }
        } else {
          const errorMessage = `There is no user with email ${email}`;
          return res.redirect(`/user/login?error=${errorMessage}`);
        }
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }

  static renderRegister(req, res) {
    let errors = req.query.error;
    errors = errors.split(';');
    // res.send(errors);
    res.render('register', { errorMessage: errors });
  }

  static postRegister(req, res) {
    console.log(req.body);
    const { name, email, password, role } = req.body;

    User.create({ name, email, password, role })
      .then((result) => {
        sendEmail(email);
        res.redirect('/user/login');
      })
      .catch((err) => {
        const errorMessage = err.errors.map((el) => el.message);
        // console.log(errorMessage, '<=======');
        // res.send(errorMessage);
        res.redirect(`/user/register?error=${errorMessage.join(';')}`);
      });
  }

  static getLogOut(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/user/login');
      }
    });
  }
}

module.exports = ControllerAuth;
