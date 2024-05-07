import { SlTrash } from "react-icons/sl";
import { ImCheckmark } from "react-icons/im";
import styles from './Tarefa.module.css';
import Titulo from "../Titulo";
import { useState } from "react";
import FormataData from "../FormataData";
import ModalTarefa from "../ModalTarefa";

function Tarefa({ nomeTarefa, data, descricao, id, deletar, tarefaConcluida}) {
    const [checkbox, setCheckbox] = useState(false)

    const aoCheckboxClicado = () => {
        setCheckbox(!checkbox)
        tarefaConcluida(id)
    }

    return (
        <div className={`${styles.tarefa} ${checkbox ? styles.checked : ''}`}>
            <div className={styles.icones_container}>
                <SlTrash
                    className={styles.icone_lixeira}
                    onClick={() => deletar(id)}
                />
                <ModalTarefa 
                    tituloTarefa={nomeTarefa}
                    descricao={descricao}
                />
            </div>
            <div className={styles.info_tarefa_container}>
                <Titulo>
                    <h2>{nomeTarefa}</h2>
                </Titulo>
                <FormataData data={data}></FormataData>
            </div>
            <div className={styles.checkbox_container}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={checkbox}
                    onChange={aoCheckboxClicado}
                />
                <label><ImCheckmark /></label>
            </div>
        </div>
    )
}

export default Tarefa;