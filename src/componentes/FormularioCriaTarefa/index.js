import { useState } from 'react';
import Botao from '../Botao';
import CampoAreaTexto from '../CampoAreaTexto';
import CampoData from '../CampoData';
import CampoTexto from '../CampoTexto';
import Titulo from '../Titulo';
import styles from './FormularioCriaTarefa.module.css';
import api from "../../api/axios";

function FormularioCriaTarefa({ carregarTarefas }) {

    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [dataTarefa, setDataTarefa] = useState("")
    

    const aoSubmeter = async (evento) => {
        evento.preventDefault()
        
        try {
            await api.post("/tarefas/criar", { titulo, descricao, dataTarefa})
        
            setTitulo('')
            setDescricao('')
            setDataTarefa('')
            carregarTarefas();
        } catch (erro) {
        console.error(`Erro ao buscar tarefas: ${erro}`)
        }
    };


    return (
        <section className={styles.formularioContainer}>
            <form className={styles.formulario} onSubmit={aoSubmeter}>
                <Titulo><h2>Criar nova tarefa!</h2></Titulo>
                <CampoTexto
                    label="Titulo da tarefa"
                    placeholder="Digite o titulo da tarefa..."
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />
                <CampoAreaTexto
                    label="Descriçao da tarefa..."
                    placeholder="Digite a descrição da tarefa..."
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <CampoData
                    label="Data da tarefa"
                    valor={dataTarefa}
                    aoAlterado={valor => setDataTarefa(valor)}
                />
                <Botao
                    texto="Criar tarefa"
                />
            </form>
        </section>
    )
}

export default FormularioCriaTarefa;