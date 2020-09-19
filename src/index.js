const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World express');
});

app.get('/test', (req, res) => {
  res.send('<h1>TEST</h1>');
});

app.get('/about', (req, res) => {
  res.send('About me');
});

app.get('/contact', (req, res) => {
  res.send('Form Contact of the API');
});

app.listen(3000, () => {
  console.log('Server on port 3000');
});
