import styles from './Error.module.css';
import { Link } from 'react-router-dom';
export default function Error({ status, message }) {
    return (
        <section id={styles['errorContainer']}>
            <div id={styles['errorContainer-details']}>
                <h2 className={styles['errorContainer-type']}>Error <span style={{color: '#A259FF'}}>{`${status}`}</span></h2>
                <span className={styles['errorContainer-message']}>{`${message}`}</span>
            </div>
            <Link to="/" className={styles['errorContainer-home_button']}><button className={styles['errorContainer-button']}>Return Home</button></Link>
        </section>
    )
}