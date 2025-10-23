const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors'); 
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const usuariosRoutes = require('./src/routes/usuarios');
app.use('/usuarios', usuariosRoutes);


app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde Express!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://localhost:3000`);
});

const connectDB = require("./src/utils/db");
const modelojuegos = require('./src/models/juegos');
connectDB();

app.use('/api/resenas', require('./src/routes/resenas'));
app.use('/usuarios', require('./src/routes/usuarios'));
app.use("/api/juegos", require("./src/routes/juegos"));

module.exports = app;