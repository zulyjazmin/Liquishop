const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoControllers'); 


router.post('/crear', contactoController);

module.exports = router;
