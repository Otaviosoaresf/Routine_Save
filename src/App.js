import { useEffect, useState } from 'react';
import Banner from './componentes/Banner';
import FormularioCriaTarefa from './componentes/FormularioCriaTarefa';
import Titulo from './componentes/Titulo';
import ExibeTarefas from './componentes/ExibeTarefas';
import BotaoLimpaTarefas from './componentes/BotaoLimpaTarefas';
import api from "./api/axios"

function App() {

  const [ tarefas, setTarefas ] = useState([]);

  const carregarTarefas = async () => {
    const res = await api.get("/tarefas")
    setTarefas(res.data)
  };
 
  const deletarTarefa = async (id) => {
    try {
      await api.delete(`/tarefas/excluir/${id}`)
      carregarTarefas();
    } catch (erro) {
      console.error(`Erro ao excluir a tarefa: ${erro}`)
    }
  };

  const alterarStatusTarefa = async (id) => {
    try {
      await api.put(`/tarefas/alterar/${id}`)
      carregarTarefas();
    } catch (erro) {
      console.error(`Erro ao alterar status da tarefa: ${erro}`)
    };
  }

  const limparTarefasConcluidas = async (tarefas, tarefaConcluida) => {
    try {
      await api.delete(`/tarefas/excluir`);
      carregarTarefas();
    } catch (erro) {
      console.error(`Erro ao excluir tarefas concluidas: ${erro}`)
    } 
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <div>
      <Banner />
      <Titulo><h1>Organize suas tarefas diárias!</h1></Titulo>
      <FormularioCriaTarefa
        carregarTarefas={carregarTarefas}
      />
      <BotaoLimpaTarefas
        aoClicado={limparTarefasConcluidas}
      />
      <ExibeTarefas
        tarefas={tarefas}
        deletar={deletarTarefa}
        tarefaConcluida={alterarStatusTarefa}
      />
    </div>

  );
}

export default App;
