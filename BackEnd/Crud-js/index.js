import express from "express"
import dotenv from "dotenv"
import conectarDB from "./config/db.js";
import mesaRoutes from "./routes/mesaRoutes.js"
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4000

dotenv.config()

conectarDB()
app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.use("/api/mesas", mesaRoutes)

app.listen(PORT, () => {
  console.log(`El servidor está escuchando en http://localhost:${PORT}`);
});