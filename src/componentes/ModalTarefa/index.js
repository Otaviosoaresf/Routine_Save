import { useState } from 'react';
import Modal from 'react-modal';
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import styles from './ModalTarefa.module.css';


function ModalTarefa({ tituloTarefa, descricao}) {
    Modal.setAppElement('#root')
    const [modalAberto, setModalAberto] = useState(false);

    function abreModal() {
        setModalAberto(true);
    }

    function fechaModal() {
        setModalAberto(false);
    }
    return (

        <>
            <button
                className={styles.botao_abreModal}
                onClick={abreModal}
            >
                <IoEllipsisHorizontalSharp />
            </button>
            <Modal
                isOpen={modalAberto}
                onRequestClose={fechaModal}
                contentLabel="Example Modal"
                className={styles.modal_content}
                overlayClassName={styles.overlay}
            >
                <div className={styles.modal_container}>
                    <h2 className={styles.modal_titulo}>{tituloTarefa}</h2>
                    <p className={styles.modal_descricao}>{descricao}</p>
                    <div className={styles.botao_container}>
                        <button
                            className={styles.modal_botao}
                            onClick={fechaModal}>Fechar</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalTarefa;


