

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); 


router.get('/productos', (req, res) => {
  console.log('Llamada a /catalogo/productos');
  productController.getAllProducts(req, res);
});



module.exports = router;
