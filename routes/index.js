const express = require('express');

const router = express.Router();

router.use('/books', require('./books'));

/*
 * Error treatments
 */
const setPayloadError = (res, statusCode, message, developerMessage) => {
  res.status(statusCode).send({
    error: {
      message, statusCode, developerMessage: developerMessage || null,
    },
  });
};

/* eslint no-unused-vars: ["error", { "args": "none" }] */
router.use((error, req, res, next) => {
  const hasNameProperty = Object.prototype.hasOwnProperty.call(error, 'name');
  return setPayloadError(res, 500, error.message, 'Something bad happened');
});

module.exports = router;

module.exports = router;
