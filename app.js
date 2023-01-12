if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
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

app.listen(8080, () => {
  console.log('server listen to the port 8080');
});

// coba bisa gak
