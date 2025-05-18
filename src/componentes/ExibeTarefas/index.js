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
                        nomeTarefa={tarefa.titulo}
                        data={tarefa.dataTarefa}
                        descricao={tarefa.descricao}
                        id={tarefa._id}
                        key={tarefa._id}
                        deletar={deletar}
                        tarefaConcluida={tarefaConcluida}
                    />
                ))}
            </section>
        </>
    )
}

export default ExibeTarefas