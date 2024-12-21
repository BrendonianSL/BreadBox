import styles from './ContentSpace.module.css';
import Article from './Article';

export default function ContentSpace() {
    return (
        <section id={styles.contentSpace}>
            <Article />
        </section>
    )
}