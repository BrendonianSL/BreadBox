import styles from './Article.module.css';
import ReviewVerdict from './ReviewVerdict';
import { useEffect, useState } from 'react';

export default function Article() {

    //Sets The State Of The Component.
    const [articleInformation, setArticleInformation] = useState(null);

    //Use Effect Running On Mount.
    useEffect(() => {
        //Async Function Responsible For Fetching Article Information.
        async function fetchArticleInformation() {
            try {
                //Creates A Variable To Hold The Response.
                const response = await fetch(`http://localhost:3000${window.location.pathname}`);

                //Checks If The Response Is Ok!
                if (!response.ok) {
                    throw new Error('Network Response Failed');
                }

                //Converts The Response To JSON.
                const data = await response.json();

                const article = data[0];

                console.log(JSON.stringify(article));
                //Sets The State Of The Component.
                setArticleInformation(article);


            } catch (error) {
                //Logs Any Error That We Come Across.
                console.error(error);
            }
        }

        //Calls The Function Above.
        fetchArticleInformation();
    }, []);

    //If Article Information Isn't Present.
    if(!articleInformation) {
        return (
            <h1>Loading Information.</h1>
        )
    }

    return (
        <article id={styles.article}>
            <div id={styles.articleHero}>
                <img id={styles.image} src='../src/assets/zzz.webp' alt='' />
                <div id={styles.articleTitle}>
                    <h1>{articleInformation['title']}</h1>
                    <h4>{articleInformation.subtitle}</h4>
                </div>
                <div id={styles.articleAuthor}>
                    <div id={styles.articleMeta}>
                        <div id={styles.authorInfo}>
                            <img id={styles.authorImage} src='../src/assets/brendan2.jpg' alt='' />
                            <span>{articleInformation.author_name}</span>
                        </div>
                        <span>{articleInformation.created_at}</span>
                    </div>
                    <div className={styles.divider}></div>
                </div>
            </div>
            <div id={styles.articleContent}>
                {articleInformation.content.content.map((element) => {
                    return (
                        <div>
                            <h2>{element.subtitle}</h2>
                            {element.paragraphs.map((paragraph) => {
                                return (
                                    <p>{paragraph}</p>
                                )
                            })}
                        </div>
                    )
                })
                }
                </div>
                <ReviewVerdict verdict={articleInformation.verdict} description={articleInformation.verdict_description} />
        </article>
    )
} 

