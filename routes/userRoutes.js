const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.get('/read-one/:userID', userController.getOneUser);
module.exports = router;