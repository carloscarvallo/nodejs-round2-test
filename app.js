var express = require('express');
var logger = require('morgan');

var apiRouter = require('./routes/index');

var app = express();

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', apiRouter);

module.exports = app;
