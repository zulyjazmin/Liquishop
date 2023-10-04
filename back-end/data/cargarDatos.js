const mongoose = require('mongoose');
const Product = require('../src/models/ProductModels')
const jsonData1 = require('../../front-end/src/components/ProductList.json'); 
const jsonData2 = require('../../front-end/src/components/ProductList2.json'); 

mongoose.connect('mongodb+srv://zuly:sgzgjg156@liquishop.ukypr7d.mongodb.net/Liquishop?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function cargarDatos() {
  try {
    // Inserta los datos en la base de datos
    await Product.insertMany([...jsonData1, ...jsonData2]);
    console.log('Datos cargados con éxito en la base de datos.');
  } catch (error) {
    console.error('Error al cargar datos:', error);
  } finally {
    mongoose.connection.close();
  }
}

cargarDatos();
