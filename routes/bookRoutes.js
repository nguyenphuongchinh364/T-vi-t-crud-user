const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/create', bookController.createBook);
router.get('/read-all', bookController.getAllBooks);
router.get('/read-one/:bookID', bookController.getOneBook);
router.put('/update/:bookID', bookController.updateBook);
router.delete('/delete-one/:bookID', bookController.deleteOneBook);
router.delete('/delete-all', bookController.deleteAllBooks);

module.exports = router;