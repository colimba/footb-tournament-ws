const express = require('express');
const connectDB = require('./config/db');

// creacion del server
const app = express();

// conneccion a DB
connectDB();

// puerto de la app en variable, si no encuentra por defecto en 8080
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Only an API, nothing to show  ¯\_(ツ)_/¯');
})

// levantando la app
app.listen(PORT, () => {
    console.log(`Running footb-tournament-ws on port ${PORT}`);
})
