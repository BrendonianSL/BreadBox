import styles from './ArticleList.module.css';
import ArticleListItem from './ArticleListItem';

/* This Component Is For Generating A List Of Reviews Or News */
export default function ArticleList() {
    return (
        <section id={styles.listContainer}>
            <h1>All Reviews</h1>
            <div id={styles.articleList}>
                <ArticleListItem />
            </div>
        </section>
    )
}