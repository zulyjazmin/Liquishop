const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  stock: Boolean,
  marca: String,
  descripcionCorta: String,
  descripcionLarga: String,
  categoria: String,
  envioSinCargo: Boolean,
  imagen: String, // Almacena la ubicación de la imagen en el sistema de archivos
}, { collection: 'altaProductos' });

const altaModelsProducto = mongoose.model('Producto', productoSchema);

module.exports = altaModelsProducto;
