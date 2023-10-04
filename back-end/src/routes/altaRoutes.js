const express = require('express');
const altaRoutes = express.Router();
const multer = require('multer');
const fs = require('fs');
const mongoose = require('mongoose');
const altaModelsProducto = require('../models/altaModelsProducto');

const imageDir = (imageName) => `images/${imageName}`;


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
      
      throw new Error('No se ha subido ningún archivo');
    }

   
    fs.copyFile(req.file.path, imageDir(req.file.originalname), async (err) => {
      if (err) {
        console.error('Error al copiar el archivo:', err);
        res.status(500).json({ error: 'Error al copiar el archivo' });
      } else {
        console.log('Archivo copiado con éxito');
        
       
        const { nombre, precio, stock, marca, descripcionCorta, descripcionLarga, categoria, envioSinCargo } = req.body;
        
       
        const nuevoProducto = new altaModelsProducto({
          nombre,
          precio,
          stock,
          marca,
          descripcionCorta,
          descripcionLarga,
          categoria,
          envioSinCargo,
          imagen: imageDir(req.file.originalname), 
        });

       
        await nuevoProducto.save();

        console.log('Producto guardado en la base de datos:', nuevoProducto);

       
        res.status(201).json({ message: 'Producto creado con éxito', producto: nuevoProducto });
      }
    });
  } catch (error) {
    console.error('Error en la solicitud:', error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = altaRoutes;
