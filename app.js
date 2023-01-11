if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const route = require('./routes/index');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      sameSite: true,
    },
  })
);

app.use('/', route);

app.listen(9000, () => {
  console.log('server listen to the port 9000');
});

// coba bisa gak
