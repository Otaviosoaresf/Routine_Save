import styles from './Banner.module.css';

function Banner() {
    return (
        <div className={styles.container}
            style={{ backgroundImage: `url('/Imagens/Banner.jpg')` }}>
        </div>
    )
}

export default Banner;