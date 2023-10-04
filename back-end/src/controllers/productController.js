const Product = require('../models/ProductModels');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.setHeader('Content-Type', 'application/json'); 
    res.json(products); 
  } catch (error) {
    console.error('Error al obtener productos desde la base de datos:', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};
