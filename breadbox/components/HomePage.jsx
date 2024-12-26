import styles from './HomePage.module.css';
import { useState } from 'react';

export default function HomePage() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <section id={styles.homePageContainer}>
            <div
                id={styles.heroSection}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img id={styles.heroImage} src='../src/assets/zzz.webp' alt='Hero Image' />
                <div id={styles.heroOverlay} className={isHovered ? styles.show : ''}>
                    <summary>ZENLESS ZONE ZERO REVIEW</summary>
                    <span id={styles.test}>A simple yet deep experience that keeps the fun rolling!</span>
                </div>
            </div>
            <div className={styles['content-carousel_container']}>
                <h2>Latest Reviews</h2>
                <div className={styles['content-carousel']}>
                    <div className={styles['content-carousel_card']}>
                        <img src='../src/assets/zzz.webp' alt='' />
                        <div>
                            <span>REVIEW</span>
                            <summary>Zenless Zone Zero</summary>
                        </div>
                    </div>
                    <div className={styles['content-carousel_card']}>
                        <img src='../src/assets/zzz.webp' alt='' />
                        <div>
                            <span>REVIEW</span>
                            <summary>Zenless Zone Zero</summary>
                        </div>
                    </div>
                    <div className={styles['content-carousel_card']}>
                        <img src='../src/assets/zzz.webp' alt='' />
                        <div>
                            <span>REVIEW</span>
                            <summary>Zenless Zone Zero</summary>
                        </div>
                    </div>
                    <div className={styles['content-carousel_card']}>
                        <img src='../src/assets/zzz.webp' alt='' />
                        <div>
                            <span>REVIEW</span>
                            <summary>Zenless Zone Zero</summary>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={styles['content-carousel_container']}>
                <h2>Latest News</h2>
                <div className={styles['content-carousel']}>
                    <div className={styles['content-carousel_card']}>
                        <img src='../src/assets/zzz.webp' alt='' />
                        <div>
                            <span>REVIEW</span>
                            <summary>Zenless Zone Zero</summary>
                        </div>
                    </div>
                    <div className={styles['content-carousel_card']}>
                        <img src='../src/assets/zzz.webp' alt='' />
                        <div>
                            <span>REVIEW</span>
                            <summary>Zenless Zone Zero</summary>
                        </div>
                    </div>
                    <div className={styles['content-carousel_card']}>
                        <img src='../src/assets/zzz.webp' alt='' />
                        <div>
                            <span>REVIEW</span>
                            <summary>Zenless Zone Zero</summary>
                        </div>
                    </div>
                    <div className={styles['content-carousel_card']}>
                        <img src='../src/assets/zzz.webp' alt='' />
                        <div>
                            <span>REVIEW</span>
                            <summary>Zenless Zone Zero</summary>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}
