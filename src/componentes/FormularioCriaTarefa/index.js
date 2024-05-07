import { useState } from 'react';
import Botao from '../Botao';
import CampoAreaTexto from '../CampoAreaTexto';
import CampoData from '../CampoData';
import CampoTexto from '../CampoTexto';
import Titulo from '../Titulo';
import styles from './FormularioCriaTarefa.module.css';
import { v4 as uuidv4 }  from 'uuid';

function FormularioCriaTarefa({ aoCadastrar }) {

    const [nomeTarefa, setNomeTarefa] = useState([])
    const [descricao, setDescricao] = useState([])
    const [data, setData] = useState([])
    const id = uuidv4()
    

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nomeTarefa,
            descricao,
            data,
            id,
        })
        setNomeTarefa('')
        setDescricao('')
        setData('')
    }


    return (
        <section className={styles.formularioContainer}>
            <form className={styles.formulario} onSubmit={aoSubmeter}>
                <Titulo><h2>Criar nova tarefa!</h2></Titulo>
                <CampoTexto
                    label="Titulo da tarefa"
                    placeholder="Digite o titulo da tarefa..."
                    valor={nomeTarefa}
                    aoAlterado={valor => setNomeTarefa(valor)}
                />
                <CampoAreaTexto
                    label="Descriçao da tarefa..."
                    placeholder="Digite a descrição da tarefa..."
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <CampoData
                    label="Data da tarefa"
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                />
                <Botao
                    texto="Criar tarefa"
                />
            </form>
        </section>
    )
}

export default FormularioCriaTarefa;