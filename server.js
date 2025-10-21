const mongoose = require('mongoose');

const express = require('express');
const app = express();
const PORT = 3000;
require('dotenv').config();
const cors = require('cors');


app.use(cors());
app.use(express.json());


app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde Express!' });
});


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://localhost:3000`);
});

const connectDB = require("./gametrackerbackend/src/utils/db");
const modelojuegos = require('./gametrackerbackend/src/models/juegos');
connectDB();

app.use("/api/juegos", require("./gametrackerbackend/src/routes/juegos"));

module.exports = app;