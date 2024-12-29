import styles from './ReviewVerdict.module.css';

export default function ReviewVerdict({ verdict, description }) {
    return (
        <div id={styles.reviewVerdict}>
            <div id={styles.verdict}>
                <h3>{verdict}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}