const mongoose = require('mongoose');
// cargar las variables de entorno de desarrollo
require('dotenv').config({ path: 'variables.env' });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
        // si no podemos conectar detenemos la app
        process.exit(1);
    }
}

module.exports = connectDB;
