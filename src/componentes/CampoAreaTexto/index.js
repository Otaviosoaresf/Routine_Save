import Titulo from '../Titulo';
import styles from './CampoAreaTexto.module.css';

function CampoAreaTexto({ label, placeholder, valor, aoAlterado }) {
    return (
        <div className={styles.areaTextoContainer}>
            <label><Titulo><h3>{label}</h3></Titulo></label>
            <textarea
                required
                className={styles.areaTexto}
                rows={6}
                placeholder={placeholder}
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
            />

        </div>
    )
}

export default CampoAreaTexto;