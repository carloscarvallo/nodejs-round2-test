const express = require('express');
const logger = require('morgan');

const apiRouter = require('./routes/index');

const app = express();

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', apiRouter);

module.exports = app;
