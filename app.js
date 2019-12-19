const express = require('express');

const indexRouter = require('./routes');
const usersRouter = require('./routes/user');
const authenticationRouter = require('./routes/authentication');
const userMiddleWare = require('./middleware');
const useErrorHandlers = require('./middleware/error-handlers');

const app = express();
userMiddleWare(app);

app.use('/', indexRouter);
app.use('/', authenticationRouter);
app.use('/user', usersRouter);

useErrorHandlers(app);

module.exports = app;
