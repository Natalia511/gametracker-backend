// src/routes/reseñas.js
const express = require("express");
const router = express.Router();
const Reseña = require("../models/Reseña");

// ✅ 1. Crear nueva reseña
router.post("/", async (req, res) => {
  try {
    const nuevaReseña = new Reseña(req.body);
    const reseñaGuardada = await nuevaReseña.save();
    res.status(201).json(reseñaGuardada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar la reseña" });
  }
});

// ✅ 2. Obtener todas las reseñas
router.get("/", async (req, res) => {
  try {
    const reseñas = await Reseña.find().populate("juegoId", "titulo plataforma");
    res.json(reseñas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las reseñas" });
  }
});

// ✅ 3. Obtener reseñas de un juego específico
router.get("/juego/:id", async (req, res) => {
  try {
    const reseñas = await Reseña.find({ juegoId: req.params.id });
    res.json(reseñas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener reseñas del juego" });
  }
});

// ✅ 4. Actualizar una reseña
router.put("/:id", async (req, res) => {
  try {
    const reseñaActualizada = await Reseña.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(reseñaActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la reseña" });
  }
});

// ✅ 5. Eliminar una reseña
router.delete("/:id", async (req, res) => {
  try {
    await Reseña.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Reseña eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la reseña" });
  }
});

module.exports = router;
