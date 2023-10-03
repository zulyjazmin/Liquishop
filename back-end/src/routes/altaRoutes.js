const express = require('express');
const altaRoutes = express.Router();
const multer = require('multer');
const fs = require('fs');
const mongoose = require('mongoose');
const altaModelsProducto = require('../models/altaModelsProducto');

const imageDir = (imageName) => `images/${imageName}`;

// Configura multer para que guarde los archivos en la carpeta "images"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage });

altaRoutes.post('/alta', uploads.single('imagen'), async (req, res) => {
  try {
    if (!req.file) {
      // Si req.file es nulo, significa que no se ha subido ningún archivo.
      throw new Error('No se ha subido ningún archivo');
    }

    // Copia el archivo al directorio de imágenes
    fs.copyFile(req.file.path, imageDir(req.file.originalname), async (err) => {
      if (err) {
        console.error('Error al copiar el archivo:', err);
        res.status(500).json({ error: 'Error al copiar el archivo' });
      } else {
        console.log('Archivo copiado con éxito');
        
        // Ahora puedes guardar los datos en la base de datos
        const { nombre, precio, stock, marca, descripcionCorta, descripcionLarga, categoria, envioSinCargo } = req.body;
        
        // Crea un nuevo documento en la colección "altaProductos"
        const nuevoProducto = new altaModelsProducto({
          nombre,
          precio,
          stock,
          marca,
          descripcionCorta,
          descripcionLarga,
          categoria,
          envioSinCargo,
          imagen: imageDir(req.file.originalname), // La ubicación de la imagen en el sistema de archivos
        });

        // Guarda el producto en la base de datos
        await nuevoProducto.save();

        console.log('Producto guardado en la base de datos:', nuevoProducto);

        // Responde con éxito
        res.status(201).json({ message: 'Producto creado con éxito', producto: nuevoProducto });
      }
    });
  } catch (error) {
    console.error('Error en la solicitud:', error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = altaRoutes;
