const express = require('express');
// const mongoose = require('mongoose');

const indexRouter = require('./routes');
const usersRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const authenticationRouter = require('./routes/authentication');
const userMiddleWare = require('./middleware');
const useErrorHandlers = require('./middleware/error-handlers');

// mongoose.connect(
//   'mongodb+srv://tenderUser:b.-6EEHk!7obdBxTshEP@cluster0-kuoil.mongodb.net/test?retryWrites=true&w=majority',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
// );

const app = express();

userMiddleWare(app);

app.use((req, res, next) => {
  app.locals.isUser = !!req.session.user;
  app.locals.isAdmin = !!req.session.admin;
  if (req.session.user) {
    app.locals.userName = req.session.user.username;
  } else if (req.session.admin) {
    app.locals.userName = req.session.admin.username;
  }
  next();
});

app.use('/', indexRouter);
app.use('/', authenticationRouter);
app.use('/user', usersRouter);
app.use('/admin', adminRouter);

useErrorHandlers(app);

module.exports = app;
