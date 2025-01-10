import styles from './Article.module.css';
import Loader from './Loader';
import ReviewVerdict from './ReviewVerdict';
import Error from './Error';
import { useEffect, useState } from 'react';

export default function Article() {
    // Variable to hold the endpoint for fetching the article
    const endpoint = `http://localhost:3000${window.location.pathname}`;

    // State for article data, error, and loading
    const [articleInformation, setArticleInformation] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch article information on mount
    useEffect(() => {
        let isMounted = true;

        async function fetchArticleInformation() {
            try {
                const response = await fetch(endpoint);

                if (!response.ok) {
                    const data = await response.json();
                    throw new Error(
                        JSON.stringify({
                            status: response.status,
                            message: data.message || 'Failed to fetch article.',
                        })
                    );
                }

                const data = await response.json();

                if (isMounted) {
                    setArticleInformation(data[0]); // Assuming data[0] contains the article
                    setError(null); // Clear any previous errors
                }
            } catch (fetchError) {
                console.error(fetchError);
                if (isMounted) {
                    setError(JSON.parse(fetchError.message));
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        fetchArticleInformation();

        return () => {
            isMounted = false; // Cleanup on unmount
        };
    }, [endpoint]);

    // Update the document title when article information is available
    useEffect(() => {
        if (articleInformation) {
            document.title = articleInformation.title || 'Article';
        }
    }, [articleInformation]);

    // Render the skeleton while loading
    if (isLoading) {
        return <Loader />;
    }

    // Render the error component if there is an error
    if (error) {
        return <Error status={error.status} message={error.message} />;
    }

    // Render the article
    return (
        <article id={styles.article}>
            <div id={styles.articleHero}>
                <img
                    className={`${styles.image}`}
                    src={`${articleInformation.thumbnail}`}
                    alt={articleInformation.title || 'Article Thumbnail'}
                />
                <div id={styles.articleTitle}>
                    <h1 id={styles['article-title']}>{articleInformation.title}</h1>
                    <h4 id={styles['article-subtitle']}>{articleInformation.subtitle}</h4>
                </div>
                <div id={styles.articleAuthor}>
                    <div id={styles.articleMeta}>
                        <div id={styles.authorInfo}>
                            <img
                                id={styles.authorImage}
                                src={'../src/assets/brendan2.jpg'}
                                alt={articleInformation.author_name}
                            />
                            <span className={styles['article-meta-text']}>
                                {articleInformation.author_name}
                            </span>
                        </div>
                        <span>{new Date(articleInformation.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className={styles.divider}></div>
                </div>
            </div>
            <div id={styles.articleContent}>
                {articleInformation.content.content.map((element, index) => (
                    <div key={index} className={styles['articleContent-section']}>
                        {(element.picture || element.subtitle) && (
                            <div className={styles['articleContent-section_hero']}>
                                {element.picture && (
                                    <img
                                        className={styles.image}
                                        src={element.picture}
                                        alt={element.subtitle || 'Content Image'}
                                    />
                                )}
                                {element.subtitle && (
                                    <h2 className={styles['article-subheading']}>
                                        {element.subtitle}
                                    </h2>
                                )}
                            </div>
                        )}
                        <div className={styles['articleContent-section_paragraphs']}>
                            {element.paragraphs.map((paragraph, idx) => (
                                <p key={idx} className={styles['article-paragraph']}>
                                    {paragraph}
                                    <br />
                                    <br />
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {endpoint.includes('reviews') && (
                <ReviewVerdict
                    verdict={articleInformation.verdict}
                    description={articleInformation.verdict_description}
                />
            )}
        </article>
    );
}
