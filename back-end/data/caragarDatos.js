// backend/scripts/cargarDatos.js
const mongoose = require('mongoose');
const Product = require('../models/Product'); // Asegúrate de que la ruta sea correcta
const jsonData1 = require('../../front-end/src/components/ProductList.json'); // Ruta a ProductList.json
const jsonData2 = require('../../front-end/src/components/ProductList2.json'); // Ruta a ProductList2.json

mongoose.connect('mongodb+srv://zuly:sgzgjg156@liquishop.ukypr7d.mongodb.net/Liquishop?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

async function cargarDatos() {
  try {
    await Product.insertMany([...jsonData1, ...jsonData2]);
    console.log('Datos cargados con éxito en la base de datos.');
  } catch (error) {
    console.error('Error al cargar datos:', error);
  } finally {
    mongoose.connection.close();
  }
}

cargarDatos();
