const { Op } = require('sequelize');
const timeSince = require('../helpers/expiredAgo');
const { sendEmailCheckout } = require('../helpers/send_email');
const { Category, Book, User, Receipt, Profile } = require('../models/index');

class Controller {
  static userHome(req, response) {
      const input=req.query.input;
      // {where:{stock:{[Op.gt]:0}}}
      if(!input){
        Book.findAll()
      .then((result) => {
        // response.send(result);

        response.render('user', { result });
      })
      .catch((err) => {
        response.send(err);
      });
      }else if(input){
      Book.findAll({where:{tittle:{[Op.iLike]: input},stock:{[Op.gt]:0}}})
      .then((result) => {
        // response.send(result);

        response.render('user', { result });
      })
      .catch((err) => {
        response.send(err);
      });
      }
      
  }

  static bookDetail(req, response) {
    const id = req.params.id;
    Book.findOne({
      where: {
        id: id,
      },
    })
      .then((result) => {
        response.render('bookDetail', { result });
      })
      .catch((err) => {
        response.send(err);
      });
  }

  static homeAdmin(req, res) {
    Receipt.findAll({
      include: [
        {
          model: Book,
          attributes: [
            'id',
            'tittle',
            'author',
            'isbn',
            'CategoryId',
            'imgUrl',
          ],
        },
        {
          model: User,
          attributes: ['id', 'name'],
          where: {
            role: 'user',
          },
        },
      ],
    })
      .then((data) => {
        // res.send(data);
        res.render('admin', { data });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }

  static adminAddBook(req, response) {
    Category.findAll()
      .then((result) => {
        console.log(result);
        response.render('adminAddBook', { result });
      })
      .catch((err) => {
        response.send(err);
      });
  }

  static postAdminAddbook(req, response) {
    const { title, author, isbn, stock, CategoryId, imgUrl } = req.body;
    Book.create({
      tittle: title,
      author,
      isbn,
      stock,
      CategoryId,
      imgUrl,
    })
      .then((result) => {
        response.redirect('back');
      })
      .catch((err) => {
        response.send(err);
      });
  }

  static adminAddCategory(req, response) {
    response.render('adminAddCategory');
  }

  static postAdminAddCategory(req, response) {
    const { name } = req.body;
    console.log(name);
    Category.create({
      name,
    })
      .then((result) => {
        response.redirect('back');
      })
      .catch((err) => {
        response.send(err);
      });
  }

  static borrowBook(req, response) {
    const id = req.params.id;
    console.log(id);
    let today = new Date();
    let tommorow = new Date();
    tommorow.setDate(today.getDate() + 3);
    let result;
    Book.findOne({
      include: Category,
      where: {
        id: id,
      },
    })
      .then((data) => {
      result = data;
      console.log(data);
      return Receipt.create({
        UserId: req.session.userId,
        BookId: result.id,
        CategoryId: result.Category.id,
        checkOutDate: today,
        expiredDate: tommorow,
      })
    })
      .then((value) => {
        return Book.decrement({ stock: 1 }, { where: { id: id } });
      })
      .then((value) => {
        let mail = req.session.email;
        response.redirect('back');
        sendEmailCheckout(mail, today, tommorow);
      })
      .catch((err) => {
        console.log(err);
        response.send(err);
      });
  }

  static myBook(req, response) {
    Receipt.findAll({
      include: Book,
      where: {
        UserId: req.session.userId,
      },
    })
      .then((data) => {
        
        response.render('myBook', { data,timeSince });
      })
      .catch((err) => {
        console.log(err);
        response.send(err);
      });
  }

  static returnBook(req,response){
    let bookId;
    const id=req.params.id;
   
    Receipt.findOne({
      where:{
        id:id
      }
    })
    .then((result) => {
      bookId=result.BookId;
      return Book.increment({ stock: 1 }, { where: { id: bookId } })
    })
    .then((data) => {
      return Receipt.destroy({
        where: {
          id: id
        }
      }) 
    })
    .then((value) => {
      response.redirect('back')
    })
    .catch((err) => {
      response.send(err)
    });
    
  }
  static renderUserProfile(req, response) {
    let id = req.session.userId;
    Profile.findOne({
      where: {
        UserId: id,
      },
    })
      .then((result) => {
        // response.send(result);
        response.render('profile', { user: result });
      })
      .catch((err) => {
        response.send(err);
      });

    // response.render('profile');
  }

  static renderUserEditProfile(req, response) {
    const id = req.session.userId;
    Profile.findOne({
      where: {
        UserId: id,
      },
    })
      .then((user) => {
        // response.send(data);
        console.log(user);
        response.render('editProfile', { user });
      })
      .catch((err) => {
        response.send(err);
      });
  }

  static postEditProfile(req,response){
    let id=req.session.userId;
    console.log(req.session);
    const{name,imgurl,birtdate,gender}=req.body
    console.log(name,imgurl,birtdate,gender);
    Profile.update({ name: name,imgurl:imgurl,birtdate:birtdate,gender:gender }, {
      where: {
        UserId: id
      }
    })
    .then((result) => {
      response.redirect('/profile')
    }).catch((err) => {
      response.send(err)
    });
  }

  
}

module.exports = Controller;
