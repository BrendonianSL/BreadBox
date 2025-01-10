import styles from './ArticleSkeleton.module.css';

export default function ArticleSkeleton() {
    return (
        <section id={styles['skeleton-container']}>
            <div id={styles['skeleton-hero']}>
                <div id={styles['skeleton-image-container']}>
                    <div className={`${styles['skeleton']} ${styles['skeleton-image']}`}>
                    </div>
                </div>
                <div id={styles['skeleton-hero-title']}>
                    <div className={`${styles['skeleton']} ${styles['skeleton-text']}`}></div>
                    <div className={`${styles['skeleton']} ${styles['skeleton-text']}`}></div>
                    <div className={`${styles['skeleton']} ${styles['skeleton-text']}`}></div>
                    <div className={`${styles['skeleton']} ${styles['skeleton-text']}`}></div>
                    <div className={`${styles['skeleton']} ${styles['skeleton-text']}`}></div>
                    <div className={`${styles['skeleton']} ${styles['skeleton-text']}`}></div>
                    <div className={`${styles['skeleton']} ${styles['skeleton-text']}`}></div>
                    <div className={`${styles['skeleton']} ${styles['skeleton-text']}`}></div>
                </div>
            </div>
        </section>
    )
}