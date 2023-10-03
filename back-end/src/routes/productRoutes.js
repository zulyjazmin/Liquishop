// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Importa el controlador de productos

// Ruta para obtener todos los productos desde la base de datos
router.get('/productos', productController.getAllProducts);

// Otras rutas para agregar, editar o eliminar productos si es necesario

module.exports = router;
