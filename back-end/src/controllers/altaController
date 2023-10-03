const altaController = {
  crearProducto: async (req, res) => {
    try {
      console.log('Datos del formulario:', req.body);

      // Verificar si se ha cargado una imagen
      if (!req.file) {
        return res.status(400).json({ message: 'Debes subir una imagen' });
      }

      // Obtener la ubicación de la imagen cargada desde la solicitud
      const imagenLocation = `images/${req.file.originalname}`;

      // Copiar el archivo al sistema de archivos en la ubicación deseada
      fs.copyFile(req.file.path, imagenLocation, (err) => {
        if (err) {
          console.error('Error al copiar el archivo:', err);
          res.status(500).json({ error: 'Error al copiar el archivo' });
        } else {
          console.log('Archivo copiado con éxito');
          // Resto del código para crear el producto
          // ...

          console.log('Datos guardados en la base de datos:', resultado);

          // Responder con éxito
          res.status(201).json({ message: 'Producto creado con éxito', producto: resultado });
        }
      });
    } catch (error) {
      // Manejo de errores
      console.error('Error al crear el producto:', error);
      res.status(500).json({ message: 'Error al crear el producto', error: error.message });
    }
  },
};

module.exports = altaController;

