const mongoose = require("mongoose");

const connectarDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB conectado: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Erro ao conectar ao banco de dados: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectarDB;