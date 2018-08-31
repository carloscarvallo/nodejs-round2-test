const express = require('express');
const { books } = require('../controllers');

const router = express.Router();

router.get('/', books.list);
router.post('/', books.create);
router.get('/:bookId', books.retrieve);
router.put('/:bookId', books.update);
router.delete('/:bookId', books.destroy);

module.exports = router;
