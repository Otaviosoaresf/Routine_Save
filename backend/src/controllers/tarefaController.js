const Tarefa = require("../models/Tarefa");

const criaTarefa = async (req, res) => {
    const { titulo, descricao, dataTarefa } = req.body;
    const dataConvertida = new Date(dataTarefa);

    try {
        const novaTarefa = await Tarefa.create({ 
            titulo, 
            descricao, 
            dataTarefa: dataConvertida
        });

        res.status(201).json({
            mensagem: "Tarefa criada com sucesso", 
            tarefa: novaTarefa
        });
    } catch (error) {
        res.status(500).json(`Erro ao criar tarefa: ${error}`);
    }
};

const listarTodasAsTarefas = async (req, res) => {
    try {
        const todasAsTarefas = await Tarefa.find();
        res.status(200).json(todasAsTarefas)
    } catch (error) {
        res.status(500).json(`Erro ao buscar tarefas: ${error}`);
    }
};

const alterarStatusTarefa = async (req, res) => {
    try {
        const tarefa = await Tarefa.findById(req.params.id)

        if (!tarefa) {
            return res.status(404).json({ msg: "Tarefa não encontrada" });
        }

        if (tarefa.concluida) {
            tarefa.concluida = false
            await tarefa.save();
            return res.status(200).json({ 
                Msg: "tarefa marcada como não concluída", 
                Tarefa: tarefa
            });
        }

        tarefa.concluida = true
        await tarefa.save();
        return res.status(200).json({ 
            Msg: "tarefa marcada como concluída", 
            Tarefa: tarefa
        });
    } catch (error) {
        res.status(500).json(`Erro ao atualizar tarefa: ${error}`);
    }
};

const excluirTarefa = async (req, res) => {
    try {
        const { id } = req.params;
        const tarefa = await Tarefa.findById(id);

        if (!tarefa) {
            return res.status(404).json({ msg: "Tarefa não encontrada" });
        }

        await tarefa.deleteOne();
        res.status(200).json({ msg: "Tarefa excluida com sucesso! " });
    } catch (error) {
        res.status(500).json({ msg: `Erro ao excluir chamado. ${error}`});
    }
};

const excluirTarefasConcluidas = async (req, res) => {
    try {
        const tarefasConcluidas = await Tarefa.find({ concluida: true });

        if (tarefasConcluidas.length === 0) {
            return res.status(404).json({ msg: "Não há tarefas concluidas para excluir. "});
        }

        await Tarefa.deleteMany({ concluida: true });
        return res.status(200).json({ msg: "Tarefas concluidas excluidas com sucesso."});
    } catch (error) {
        return res.status(500).json({ msg: `Erro ao excluir tarefas concluidas: ${error}`});
    }
};

module.exports = { 
    criaTarefa, 
    listarTodasAsTarefas, 
    alterarStatusTarefa,
    excluirTarefa,
    excluirTarefasConcluidas
};