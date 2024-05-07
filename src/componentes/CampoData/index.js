import Titulo from '../Titulo';
import styles from './CampoData.module.css';

function CampoData({ label, valor, aoAlterado }) {
    return (
        <div className={styles.campoData}>
            <label><Titulo><h3>{label}</h3></Titulo></label>
            <input
                required
                type='date'
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
            />
        </div>
    )
}

export default CampoData;