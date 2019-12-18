const express = require('express');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const userMiddleWare = require('./middleware');
const useErrorHandlers = require("./middleware/error-handlers");

const app = express();
userMiddleWare(app);

app.use('/', indexRouter);
app.use('/users', usersRouter);

useErrorHandlers(app);

module.exports = app;
