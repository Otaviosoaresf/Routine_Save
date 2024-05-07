import styles from './Botao.module.css';

function Botao({ texto, funcao }) {
    return (
        <button
            className={styles.botao}
            onClick={() => funcao}
        >
            {texto}
        </button>
    )
}

export default Botao;