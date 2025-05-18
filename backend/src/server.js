require("dotenv").config();
const express = require("express");
const cors = require("cors");

const conectarDB = require("./config/db");
const tarefasRoutes = require("./routes/tarefaRoutes")

const app = express();

conectarDB();

app.use(express.json());
app.use(cors());

app.use("/api/tarefas", tarefasRoutes);

app.get("/", (req, res) => {
    res.send("API de tarefas rodando");
});

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
});