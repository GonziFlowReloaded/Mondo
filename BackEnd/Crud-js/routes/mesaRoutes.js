import express from "express";
import {
  crearMesa,
  obtenerMesa,
  obtenerMesas,
  editarMesa,
  eliminarMesa,
} from "../controllers/mesasController.js";

const router = express.Router();

router.get("/", obtenerMesas);
router.get("/:id", obtenerMesa);
router.post("/", crearMesa);
router.put("/:id", editarMesa);
router.delete("/:id", eliminarMesa);

export default router
