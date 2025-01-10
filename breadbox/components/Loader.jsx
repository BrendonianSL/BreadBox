import styles from './Loader.module.css';

export default function Loader() {
    return (
        <section id={styles['loadingContainer']}>
        <div id={styles['loadingContainer-details']}>
            <h2 className={styles['loadingContainer-type']}>Loading <span style={{color: '#A259FF'}}>{`${status}`}</span></h2>
            <div className={styles['loader']}></div>
        </div>
    </section>
    )
}