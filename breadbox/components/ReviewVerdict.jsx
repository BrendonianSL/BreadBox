import styles from './ReviewVerdict.module.css';

export default function ReviewVerdict() {
    return (
        <div id={styles.reviewVerdict}>
            <div id={styles.verdict}>
                <h3>VERDICT HERE</h3>
                <p>Short summary of the review.</p>
            </div>
        </div>
    )
}