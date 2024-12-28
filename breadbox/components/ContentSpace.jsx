import styles from './ContentSpace.module.css';
import Article from './Article';
import ArticleList from './ArticleList';
import HomePage from './HomePage';

export default function ContentSpace() {
    return (
        <section id={styles.contentSpace}>
            <Article />
        </section>
    )
}