import Titulo from '../Titulo';
import styles from './CampoTexto.module.css';

function CampoTexto({ label, placeholder, valor, aoAlterado }) {

    return (
        <div className={styles.campo}>
            <label><Titulo><h3>{label}</h3></Titulo></label>
            <input
                required
                placeholder={placeholder}
                type='text'
                value={valor}  
                onChange={evento => aoAlterado(evento.target.value)}         
            />
        </div>
    )
}

export default CampoTexto;