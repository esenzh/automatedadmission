module.exports = function (app) {
    const express = require('express');
    const path = require('path');
    const cookieParser = require('cookie-parser');
    const morgan = require('morgan');
    const session = require('express-session');
    const FileStore = require('session-file-store')(session);
    const {cookiesCleaner} = require('./auth');
    const methodOverride = require('method-override');
    const dbConnection = require("./db-connect");

    app.use(morgan('dev'));

    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    app.use(cookieParser());

    app.use(session({
        store: new FileStore(),
        key: 'user_sid',
        secret: 'very secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000
        }
    }));

    app.use(cookiesCleaner);

    // Allows you to use PUT, DELETE with forms.
    app.use(methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            const method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));

    app.use(express.static(path.join(__dirname, '..', 'public')));
    // view engine setup
    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'hbs');

};