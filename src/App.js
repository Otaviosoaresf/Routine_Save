import { useState } from 'react';
import Banner from './componentes/Banner';
import FormularioCriaTarefa from './componentes/FormularioCriaTarefa';
import Titulo from './componentes/Titulo';
import ExibeTarefas from './componentes/ExibeTarefas';
import BotaoLimpaTarefas from './componentes/BotaoLimpaTarefas';

function App() {

  const [tarefas, setTarefas] = useState([])
  const [tarefaConcluida, setTarefaConcluida] = useState([])

  const deletarTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
  }

  const limparTarefasConcluidas = (tarefas, tarefaConcluida) => {
    setTarefas(tarefas.filter(tarefa => !tarefaConcluida.includes(tarefa.id)))
  }

  return (
    <div>
      <Banner />
      <Titulo><h1>Organize suas tarefas diárias!</h1></Titulo>
      <FormularioCriaTarefa
        aoCadastrar={tarefa => setTarefas([...tarefas, tarefa])}
      />
      <BotaoLimpaTarefas
        tarefas={tarefas}
        tarefaConcluida={tarefaConcluida}
        aoClicado={limparTarefasConcluidas}
      />
      <ExibeTarefas
        tarefas={tarefas}
        deletar={deletarTarefa}
        tarefaConcluida={tarefa => setTarefaConcluida([...tarefaConcluida, tarefa])}
      />
    </div>

  );
}

export default App;
