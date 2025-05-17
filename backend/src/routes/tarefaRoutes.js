const express = require("express");
const { 
    criaTarefa, 
    listarTodasAsTarefas, 
    alterarStatusTarefa, 
    excluirTarefa,
    excluirTarefasConcluidas
} = require("../controllers/tarefaController");

const router = express.Router();

router.get("/", listarTodasAsTarefas);
router.post("/criar", criaTarefa);
router.put("/alterar/:id", alterarStatusTarefa);
router.delete("/excluir", excluirTarefasConcluidas);
router.delete("/excluir/:id", excluirTarefa);

module.exports = router;