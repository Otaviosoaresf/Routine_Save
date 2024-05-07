import Tarefa from '../Tarefa'
import Titulo from '../Titulo'
import styles from './ExibeTarefas.module.css'

function ExibeTarefas({ tarefas, deletar, tarefaConcluida }) {
    
    return (
        <>
            <Titulo><h1>Minhas tarefas</h1></Titulo>
            <section
                className={styles.container}
            >
                {tarefas.map((tarefa) => (
                    <Tarefa
                        nomeTarefa={tarefa.nomeTarefa}
                        data={tarefa.data}
                        descricao={tarefa.descricao}
                        id={tarefa.id}
                        key={tarefa.id}
                        deletar={deletar}
                        tarefaConcluida={tarefaConcluida}
                    />
                ))}
            </section>
        </>
    )
}

export default ExibeTarefas