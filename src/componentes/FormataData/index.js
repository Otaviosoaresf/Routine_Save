import styles from './FormataData.module.css';

const formatarData = (dataString) => {
    const dataParse = new Date(dataString)

    const dia = dataParse.getDate() + 1;
    const mes = dataParse.getMonth() + 1;
    const ano = dataParse.getFullYear();

    const diaFormatado = String(dia).padStart(2, '0');
    const mesFormatado = String(mes).padStart(2, '0');

    return `${diaFormatado}/${mesFormatado}/${ano}`;
}

function FormataData({ data }) {
    const dataFormatada = formatarData(data);
    return (
        <p
            className={styles.data}
        >
            {dataFormatada}
        </p>
    )
}

export default FormataData;