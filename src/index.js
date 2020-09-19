const express = require('express');
const app = express();

// Get, para devolver cosas
app.get('/user', (req, res) => {
  res.json({
    userName: 'Julio',
    lastName: 'Gonzalez',
  });
});

// Recibir una dato y procesarlo, puede ser en una base de datos y devolver una respuesta
app.post('/test', (req, res) => {
  res.send('POST REQUEST RECEIVED');
});

// Tomar los datos del frontend y actualizarlos, o actualizar datos de una bd
app.put('/about', (req, res) => {
  res.send('UPDATE REQUEST RECEIVED');
});

// Eliminar una dato del servidor y devolver una respuesta
app.delete('/contact', (req, res) => {
  res.send('DELETE REQUEST RECEIVED');
});

// servicio de archivos estaticos
app.use(express.static('./'));

app.listen(3000, () => {
  console.log('Server on port 3000');
});
