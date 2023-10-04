const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const altaRoutes = require('./routes/altaRoutes');
const contactoRoutes = require('./routes/contactoRoutes');
const productRoutes = require('./routes/productRoutes');

require('dotenv').config({
  path: '.env.local',
});

const app = express();

// Configuración de CORS personalizada
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/catalogo', productRoutes);
app.use('/', altaRoutes);
app.use('/contacto', contactoRoutes);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a MongoDB establecida');
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Servidor ejecutándose en http://localhost:' + process.env.PORT);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con MongoDB:', error);
  });
