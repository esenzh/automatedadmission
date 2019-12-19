const express = require('express');
// const mongoose = require('mongoose');

const indexRouter = require('./routes');
const usersRouter = require('./routes/user');
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

app.use('/', indexRouter);
app.use('/', authenticationRouter);
app.use('/user', usersRouter);

useErrorHandlers(app);

module.exports = app;
