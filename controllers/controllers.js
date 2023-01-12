const{Category,Book,User,Receipt,Profile}= require('../models/index')

class Controller {
  static userHome(req, response) {
    Book.findAll({
      
    })
    .then((result) => {
      response.render('user',{result})
    }).catch((err) => {
      response.send(err)
    });

  }

  static bookDetail(req,response){
    const id=req.params.id
    Book.findOne({
      where:{
        id:id
      }
    })
    .then((result) => {
      response.render('bookDetail',{result})
    }).catch((err) => {
      response.send(err)
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

  static borrowBook(req,response){
    const id=req.params.id
    console.log(id);
    let today= new Date();
    let tommorow= new Date();
    tommorow.setDate(today.getDate()+3);
    let result;
    Book.findOne({
      include:Category,
      where:{
        id:id,
        
      }
    })
    .then((data) => {
      result=data
      console.log(data);
      return Receipt.create({
        UserId:req.session.userId,
        BookId:result.id,
        CategoryId:result.Category.id,
        checkOutDate: today,
        expiredDate: tommorow,
      })
    .then((value) => {
      response.redirect('back')
    })
    }).catch((err) => {
      console.log(err);
      response.send(err)
    });
  }

  static myBook(req,response){

    Receipt.findAll({
      include:Book,
     where:{
      UserId:req.session.userId
     }   
    })
    .then((data) => {
      response.render('myBook',{data})
    })
    .catch((err) => {
      console.log(err);
      response.send(err)
    });
  }
  

}

module.exports = Controller;
