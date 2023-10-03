// controllers/productController.js

const Product = require('../models/Product'); // Importa el modelo de Producto

// Controlador para obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos desde la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

// Otros controladores para agregar, editar o eliminar productos si es necesario
