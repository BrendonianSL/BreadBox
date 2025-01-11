import styles from './HomePage.module.css';
import Loader from './Loader';
import Error from './Error';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    document.title = 'Breadbox Home';
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // State for recent reviews, news, loading, and error
    const [recentReviews, setRecentReviews] = useState([]);
    const [recentNews, setRecentNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const reviewEndpoint = 'https://bulppyqiumueqqyekrbl.supabase.co/rest/v1/reviews/recent';
    const newsEndpoint = 'https://bulppyqiumueqqyekrbl.supabase.co/rest/v1/news/recent';

    useEffect(() => {
        let isMounted = true;

        async function fetchArticleInformation() {
            try {
                // Initiate both fetches with Promise.all
                const [reviewResponse, newsResponse] = await Promise.all([
                    fetch(reviewEndpoint, {
                        headers: {
                            'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
                            'apikey': `${process.env.SUPABASE_ANON_KEY}`,
                        }
                    }),
                    fetch(newsEndpoint, {
                        headers: {
                            'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
                            'apikey': `${process.env.SUPABASE_ANON_KEY}`,
                        }
                    }),
                ]);

                // Check for errors in responses
                if (!reviewResponse.ok || !newsResponse.ok) {
                    throw new Error(`Failed to fetch data: ${reviewResponse.statusText || newsResponse.statusText}`);
                }

                // Parse JSON only if responses are okay
                const [reviewData, newsData] = await Promise.all([
                    reviewResponse.json(),
                    newsResponse.json(),
                ]);

                // Update state only if component is still mounted
                if (isMounted) {
                    setRecentReviews(reviewData.data);
                    setRecentNews(newsData.data);
                    setError(null); // Clear any previous errors
                }
            } catch (fetchError) {
                console.error('Error fetching article information:', fetchError);
                if (isMounted) {
                    setError(fetchError);
                }
            } finally {
                // Stop loading regardless of success or failure
                if (isMounted) setIsLoading(false);
            }
        }

        fetchArticleInformation();

        return () => {
            isMounted = false; // Cleanup on unmount
        };
    }, []);

    // Show loader if loading
    if (isLoading) {
        return <Loader />;
    }

    // Show error component if there’s an error
    if (error) {
        return <Error status={error.status || 500} message={error.message || 'An unexpected error occurred'} />;
    }

    // Show homepage content when data is loaded successfully
    return (
        <section id={styles.homePageContainer}>
            <div
                id={styles.heroSection}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img id={styles.heroImage} src={recentReviews[0].article_image} alt='Hero Image' />
                <div id={styles.heroOverlay} className={isHovered ? styles.show : ''}>
                    <summary>{recentReviews[0].title}</summary>
                    <span id={styles.test}>Check Out This Recent Article!</span>
                </div>
            </div>
            <div className={styles['content-carousel_container']}>
                <h2>Latest Reviews</h2>
                <div className={styles['content-carousel']}>
                    {recentReviews.map((review) => (
                        <Link
                            to={`/reviews/${review.slug}`}
                            className={styles['content-carousel_card']}
                            key={review.id}
                        >
                            <img src={`${review.article_image}`} alt={review.title} />
                            <div>
                                <span>REVIEW</span>
                                <summary>{review.title}</summary>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles['content-carousel_container']}>
                <h2>Latest News</h2>
                <div className={styles['content-carousel']}>
                    {recentNews.map((news) => (
                        <Link
                            to={`/news/${news.slug}`}
                            className={styles['content-carousel_card']}
                            key={news.id}
                        >
                            <img src={`${news.article_image}`} alt={news.title} />
                            <div>
                                <span>NEWS</span>
                                <summary>{news.title}</summary>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
