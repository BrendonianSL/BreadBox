import styles from './Article.module.css';
import ReviewVerdict from './ReviewVerdict';

export default function Article() {
    return (
        <article id={styles.article}>
            <div id={styles.articleHero}>
                <img id={styles.image} src='../src/assets/zzz.webp' alt='' />
                <div id={styles.articleTitle}>
                    <h1>Zenless Zone Zero Review</h1>
                    <h4>A simple yet deep experience that keeps the fun rolling!</h4>
                </div>
                <div id={styles.articleAuthor}>
                    <div id={styles.articleMeta}>
                        <div id={styles.authorInfo}>
                            <img id={styles.authorImage} src='../src/assets/brendan2.jpg' alt='' />
                            <span>BRENDAN LEWIS</span>
                        </div>
                        <span>POSTED DEC 18, 2024 6:00 AM</span>
                    </div>
                    <div className={styles.divider}></div>
                </div>
            </div>
            <div id={styles.articleContent}>
                <h2>Diverse Character Cast Makes Collecting A Blast</h2>
                <p>
                    Figma ipsum component variant main layer. Export selection arrow opacity content ipsum boolean. 
                    Group export inspect mask underline scrolling. Share undo draft figjam ellipse arrow. 
                    Strikethrough vector opacity text fill rotate fill arrange vector. Auto flows star library line create ipsum. 
                    Auto community auto polygon style horizontal object union shadow. Star pen arrow vertical vertical. 
                    Background rectangle flatten draft export union clip. 
                    <br></br><br></br>
                    Community background text editor mask. Bold opacity style select fill ellipse follower frame blur. 
                    Layer group plugin connection undo pencil. Link create flows editor shadow flatten opacity font. 
                    Rotate export font layout pixel background component edit. 
                    Variant move strikethrough object pencil prototype background main outline thumbnail. 
                    Vertical export thumbnail fill fill pixel invite content font. 
                    Ellipse bullet subtract main scale select community line bullet.
                </p>
                <img id={styles.image} src='../src/assets/zzz.webp' alt='' />
                <h2>Diverse Character Cast Makes Collecting A Blast</h2>
                <p>
                    Figma ipsum component variant main layer. Export selection arrow opacity content ipsum boolean. 
                    Group export inspect mask underline scrolling. Share undo draft figjam ellipse arrow. 
                    Strikethrough vector opacity text fill rotate fill arrange vector. Auto flows star library line create ipsum. 
                    Auto community auto polygon style horizontal object union shadow. Star pen arrow vertical vertical. 
                    Background rectangle flatten draft export union clip. 
                    <br></br><br></br>
                    Community background text editor mask. Bold opacity style select fill ellipse follower frame blur. 
                    Layer group plugin connection undo pencil. Link create flows editor shadow flatten opacity font. 
                    Rotate export font layout pixel background component edit. 
                    Variant move strikethrough object pencil prototype background main outline thumbnail. 
                    Vertical export thumbnail fill fill pixel invite content font. 
                    Ellipse bullet subtract main scale select community line bullet.
                </p>
            </div>
            <ReviewVerdict />
        </article>
    )
}