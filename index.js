const express = require("express");
const app = express();
const port = 3000;
require('dotenv').config();

// Importar Middlewares
const error404 = require("./middlewares/error404");

// Rutas importadas
const homeRoutes = require("./routes/home.routes");
const filmRoutes = require("./routes/film.routes");

app.use(express.json()); // Habilito recepción de JSON en servidor
app.use(express.urlencoded({ extended: true })); // Habilito recepción de formularios en servidor

// Vistas PUG
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'))

// Rutas
app.use('/', homeRoutes);
app.use('/', filmRoutes);

// Middleware
app.use(error404);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
