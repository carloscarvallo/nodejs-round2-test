const { Books } = require('../models');

const list = (_, res, next) => Books
  .findAll()
  .then(data => res.send(data))
  .catch(next);

const retrieve = (req, res, next) => Books
  .findById(req.params.bookId)
  .then(book => (book ? Promise.resolve(book) : Promise.reject(new Error('Not Found'))))
  .then(book => res.status(200).send(book))
  .catch(next);

const create = (req, res, next) => Books
  .create({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  .then(data => res.status(201).send(data))
  .catch(next);

const update = (req, res, next) => Books
  .findById(req.params.bookId)
  .then((book) => {
    if (!book) return Promise.reject(new Error('Not Found'));
    return book.update({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      updatedAt: new Date(),
    });
  })
  .then(data => res.status(202).send(data))
  .catch(next);

const destroy = (req, res, next) => Books
  .findById(req.params.bookId)
  .then(book => (book ? book.destroy() : Promise.reject(new Error('Not Found'))))
  .then(() => res.status(202).send())
  .catch(next);

module.exports = {
  list,
  create,
  retrieve,
  update,
  destroy,
};
