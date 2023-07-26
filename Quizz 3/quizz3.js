const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor HTTP!');
});

app.get('/about', (req, res) => {
  res.send('Esta es la página de acerca de nosotros.');
});

app.get('/contact', (req, res) => {
  res.send('Ponte en contacto con nosotros en contact@example.com');
});

// 404 Error Handler
app.use((req, res, next) => {
  res.status(404).send('Página no encontrada');
});

app.listen(5000);