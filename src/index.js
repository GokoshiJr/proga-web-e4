const express = require('express');
const app = express();
const port = 3000;

// middlewares, funciona para cualquier ruta, parecido al app.all
// manejador de peticion que ejecutamos antes de que lleguen a su ruta original

function logger(req, res, next) {
  // registrar las peticiones cuando lleguen al servidor
  console.log(
    `Route received: ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  next();
}

// express ahora puede entender los json, que se le envian al servidor

app.use(express.json());
app.use(logger);

// middlewares deben ir antes de las rutas

// para cualquier ruta user, primero deben pasar por el all
app.all('/user', (req, res, next) => {
  console.log('Por aqui pasamos');
  next(); // para continuar con las demas rutas
});

// Get, para devolver cosas
app.get('/user', (req, res) => {
  res.json({
    userName: 'Julio',
    lastName: 'Gonzalez',
  });
});

// Recibir una dato y procesarlo, puede ser en una base de datos y devolver una respuesta
app.post('/user/:userId', (req, res) => {
  console.log(req.body); // permite obtener la informacion del request
  console.log(req.params); // vemos los parametros
  res.send('POST REQUEST RECEIVED');
});

// Tomar los datos del frontend y actualizarlos, o actualizar datos de una bd
app.put('/user/:userId', (req, res) => {
  console.log(req.body);
  res.send(`User ${req.params.userId} updated`);
});

// Eliminar una dato del servidor y devolver una respuesta
app.delete('/user/:userId', (req, res) => {
  res.send(`User ${req.params.userId} deleted`);
});

// servicio de archivos estaticos
app.use(express.static('./'));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
