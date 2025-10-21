
const mongoose = require("mongoose");

const reseñaSchema = new mongoose.Schema({
  juegoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Juego",
    required: true,
  },
  puntuacion: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  textoReseña: {
    type: String,
    required: true,
  },
  horasJugadas: {
    type: Number,
    required: true,
  },
  dificultad: {
    type: String,
    enum: ["Fácil", "Normal", "Difícil"],
    default: "Normal",
  },
  recomendaria: {
    type: Boolean,
    default: false,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now,
  },
});

// Middleware para actualizar la fecha cuando se edita
reseñaSchema.pre("save", function (next) {
  this.fechaActualizacion = new Date();
  next();
});

const Reseña = mongoose.model("Reseña", reseñaSchema);
module.exports = Reseña;
