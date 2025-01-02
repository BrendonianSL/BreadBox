import styles from './ArticleListItem.module.css';

export default function ArticleListItem() {
    return (
        <div className={styles['listItem']}>
            <div className={styles['listItem-image_container']}>
                <img className={styles['listItemThumbnail']} src="../src/assets/zzz.webp" alt="" />
            </div>
            <div className={styles['listItem-details']}>
                <span>Zenless Zone Zero Review</span>
                <summary>A simple yet deep experience that keeps the fun rolling!</summary>
            </div>
        </div>
    )
}
