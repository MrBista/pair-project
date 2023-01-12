class Controller {
  static renderHome(req, res) {
    res.render('index');
  }

  static homeAdmin(req, res) {
    res.render('admin');
  }
}

module.exports = Controller;
