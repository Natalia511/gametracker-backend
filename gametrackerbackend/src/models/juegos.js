const mongoose = require("mongoose");

const juegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  plataforma: String,
  portadaUrl: String,
  horasJugadas: { type: Number, default: 0 },
  completado: { type: Boolean, default: false },
  puntuacion: { type: Number, min: 0, max: 5 },
  descripcion: String,
  fechaCreado: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Juego", juegoSchema);
