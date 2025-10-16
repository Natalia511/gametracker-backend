const express = require("express");
const router = express.Router();
const Juego = require('../models/juegos');


router.post("/", async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    await nuevoJuego.save();
    res.status(201).json(nuevoJuego);
  } catch (error) {
    console.error("⚠️ Error al guardar el juego:", error.message);
    res.status(500).json({ error: error.message });
  }
});



router.get("/", async (req, res) => {
  try {
    const juegos = await Juego.find();
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los juegos" });
  }
});

module.exports = router;

