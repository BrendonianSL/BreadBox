import styles from './ArticleListItem.module.css';
import { Link } from "react-router-dom";

export default function ArticleListItem({ id, article }) {
    return (
        <Link style={{ color: 'white' }} to={`${article.slug}`}>
            <div className={styles['listItem']}>
                <div className={styles['listItem-image_container']}>
                    <img className={styles['listItemThumbnail']} src={article.thumbnail} alt={`Article Thumbnail For ${article.title}`} />
                </div>
                <div className={styles['listItem-details']}>
                    <span className={styles['listItem-title']}>{article.title}</span>
                    <summary className={styles['listItem-subtitle']}>{article.subtitle}</summary>
                </div>
            </div>
        </Link>
    )
}
