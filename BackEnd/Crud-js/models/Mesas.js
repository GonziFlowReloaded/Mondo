import mongoose from "mongoose";

const mesaSchema = mongoose.Schema(
  {
    asignatura: {
      type: String,
      require: true,
    },
    aula: {
      type: String,
    },
    presidente: {
      type: String,
      ref:"Usuario",
      require: true,
    },
    fecha: {
      type: Date,
    },
    alumnos: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

const Mesa = mongoose.model("Mesa", mesaSchema);

export default Mesa;
