import styles from './BotaoLimpaTarefas.module.css';

function BotaoLimpaTarefas({ tarefas, tarefaConcluida, aoClicado }) {
    return (
        <section className={styles.container}>
            <button
                onClick={() => aoClicado(tarefas, tarefaConcluida)}
                className={styles.botaoLimpaTarefas}
            >
                Limpar Tarefas Concluídas
            </button>
        </section>
    )
}

export default BotaoLimpaTarefas;