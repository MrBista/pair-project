const{Category,Book,User,Recipe,Profile}= require('../models/index')

class Controller {
  static userHome(req, response) {
    Book.findAll({
      
    })
    .then((result) => {
      response.render('user',{result})
    }).catch((err) => {
      response.send('err')
    });

  }

  static homeAdmin(req, res) {
    res.render('admin');
  }

  static adminAddBook(req,response){
    Category.findAll()
    .then((result) => { 
      console.log(result);
      response.render('adminAddBook',{result})
    }).catch((err) => {
      response.send(err)
    });
  }

  static postAdminAddbook(req,response){
    const {title,author,isbn,stock,CategoryId}=req.body;
    console.log(title,author,isbn,stock,CategoryId);

    Book.create({
      tittle:title,author,isbn,stock,CategoryId
    })
    .then((result) => {
      response.redirect('back')
    }).catch((err) => {
      response.send(err)
    });
  }

  static adminAddCategory(req,response){
    response.render('adminAddCategory')
  }

  static postAdminAddCategory(req,response){
    const {name}=req.body;
    console.log(name);
    Category.create({
      name
    })
    .then((result) => {
      response.redirect('back')
    }).catch((err) => {
      response.send(err);
    });
  }
  

}

module.exports = Controller;
