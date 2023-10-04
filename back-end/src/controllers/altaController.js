const altaController = {
  crearProducto: async (req, res) => {
    try {
      console.log('Datos del formulario:', req.body);

    
      if (!req.file) {
        return res.status(400).json({ message: 'Debes subir una imagen' });
      }

     
      const imagenLocation = `images/${req.file.originalname}`;

      fs.copyFile(req.file.path, imagenLocation, (err) => {
        if (err) {
          console.error('Error al copiar el archivo:', err);
          res.status(500).json({ error: 'Error al copiar el archivo' });
        } else {
          console.log('Archivo copiado con éxito');
       

          console.log('Datos guardados en la base de datos:', resultado);

 
          res.status(201).json({ message: 'Producto creado con éxito', producto: resultado });
        }
      });
    } catch (error) {
  
      console.error('Error al crear el producto:', error);
      res.status(500).json({ message: 'Error al crear el producto', error: error.message });
    }
  },
};

module.exports = altaController;

