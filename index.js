const express = require("express");
const connectDB = require("./config/db");

// creacion del server
const app = express();

// conneccion a DB
connectDB();

// Para leer datos que vengan en la url
app.use(express.json({ extended: true }));

// puerto de la app en variable, si no encuentra por defecto en 8080
const PORT = process.env.PORT || 8080;

// Importar rutas -> cada uno de estos en express es un middleware
app.use('/fb-tournament-ws/tournament', require('./routes/tournament'));

app.get("/", (req, res) => {
  res.send("Only an API, nothing to show  ¯_(ツ)_/¯");
});

// levantando la app
app.listen(PORT, () => {
  console.log(`Running footb-tournament-ws on port ${PORT}`);
});
