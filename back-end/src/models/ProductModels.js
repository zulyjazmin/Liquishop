const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  precioanterior: String,
  precioactual: String,
  imagen: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
