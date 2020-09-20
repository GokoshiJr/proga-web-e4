const express = require('express');
const morgan = require('morgan'); // middleware
const app = express();

// Settings
app.set('appName', 'Gokoshi Express Example'); // setieamos una varible appName
app.set('port', 3000);
// Motor de plantillas, nos ayudan a extender el html,
// cuando queremos mostrar en la pantalla los datos de una base de datos
app.set('view engine', 'ejs');

// renderizamos el ejs, en la ruta view
app.get('/view', (req, res) => {
  // ejemplo de base de datos
  const data = [
    {name: 'Alejandro'},
    {name: 'Andres'},
    {name: 'Enrique'},
    {name: 'Jainny'},
  ];
  res.render('index.ejs', {people: data});
});

// Middlewares, funciona para cualquier ruta, parecido al app.all
// manejador de peticion que ejecutamos antes de que lleguen a su ruta original
app.use(express.json()); // express ahora puede entender los json, que se le envian al servidor
app.use(morgan('dev')); // middleware morgan, como un logger

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

app.listen(app.get('port'), () => {
  console.log(app.get('appName')); // get de la variable appName
  console.log(`Server on port ${app.get('port')}`);
});
