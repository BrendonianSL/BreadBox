import styles from './ArticleList.module.css';
import ArticleListItem from './ArticleListItem';
import Loader from './Loader';
import Error from './Error';
import { useEffect, useState } from 'react';

/* This Component Is For Generating A List Of Reviews Or News */
export default function ArticleList() {
    // Determine the endpoint dynamically based on the current pathname.
    const endpoint = `https://breadbox-backend.onrender.com${window.location.pathname}`;

    // Set the document title dynamically.
    if (endpoint.includes('reviews')) {
        document.title = 'Breadbox Reviews';
    } else if (endpoint.includes('news')) {
        document.title = 'Breadbox News';
    }

    // States for articles, loading, and error.
    const [articleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchArticles() {
            setIsLoading(true);
            try {
                const response = await fetch(endpoint, {
                    headers: {
                        'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
                        'apikey': `${process.env.SUPABASE_ANON_KEY}`,
                    }
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch articles: ${response.statusText}`);
                }

                const data = await response.json();

                if (isMounted) {
                    setArticleList(data);
                    setError(null); // Clear any previous error state.
                }
            } catch (fetchError) {
                console.error(fetchError);
                if (isMounted) {
                    setError(fetchError);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false); // Ensure loading state ends.
                }
            }
        }

        fetchArticles();

        return () => {
            isMounted = false; // Cleanup on unmount.
        };
    }, [endpoint]);

    // Display loader while loading.
    if (isLoading) {
        return <Loader />;
    }

    // Display error component if there's an error.
    if (error) {
        return <Error status={error.status || 500} message={error.message || 'An unexpected error occurred'} />;
    }

    // Display message if no articles are found.
    if (articleList.length === 0) {
        return (
            <section id={styles.listContainer}>
                <h1 id={styles['listContainer-title']}>
                    {window.location.pathname.toUpperCase().replace('/', '')}
                </h1>
                <p>No articles found.</p>
            </section>
        );
    }

    // Render the list of articles.
    return (
        <section id={styles.listContainer}>
            <h1 id={styles['listContainer-title']}>
                {window.location.pathname.toUpperCase().replace('/', '')}
            </h1>
            <div id={styles['listContainer-list']}>
                {articleList.map((article) => (
                    <ArticleListItem key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
}
