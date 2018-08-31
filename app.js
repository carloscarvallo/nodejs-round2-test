const express = require('express');
const logger = require('morgan');

const apiRouter = require('./routes/index');

const app = express();

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', apiRouter);

// Unknown Resource handler
app.use((_req, _res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  err.developerMessage = 'Unknown Resource';
  next(err);
});

/* eslint no-unused-vars: ["error", { "args": "none" }] */
app.use((err, _req, res, _next) => {
  res.status(err.status || 500).send({
    error: {
      message: err.message,
      statusCode: err.status,
      developerMessage: err.developerMessage || err.message,
    },
  });
});

module.exports = app;
