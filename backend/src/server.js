require("dotenv").config();
const express = require("express");

const conectarDB = require("./config/db");
const tarefasRoutes = require("./routes/tarefaRoutes")

const app = express();

conectarDB();

app.use(express.json());

app.use("/api/tarefas", tarefasRoutes);

app.get("/", (req, res) => {
    res.send("API de tarefas rodando");
});

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
});