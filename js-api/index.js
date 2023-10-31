import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Ruta GET para /api/status
app.get('/api/status', (req, res) => {
  res.json({ status: 'API is up and running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
