import styles from './ArticleList.module.css';
import ArticleListItem from './ArticleListItem';
import { useEffect, useState } from 'react';

/* This Component Is For Generating A List Of Reviews Or News */
export default function ArticleList() {

    //Sets The Endpoint For Fetching Data.
    const endpoint = 'http://localhost:3000/articles';

    //Creates A Use State To Hold All Articles Fetched.
    const [articleList, setArticleList] = useState([]);

    //Use Effect Runs On Mount To Grab All Reviews.
    useEffect(() => {
        async function fetchReviews() {
            try {
                //Creates A Response Variable To Fetch Data.
                const response = await fetch(endpoint);

                if(!response.ok) {
                    throw new Error('Network Response Failed');
                }

                //Converts Response To JSON.
                const data = await response.json();
            } catch(error) {
                console.error(error);
            }
        }

        //Calls Async Function
        fetchReviews();

    }, []);

    return (
        <section id={styles.listContainer}>
            <h1>Reviews</h1>
            <div id={styles['listContainer-list']}>
                <ArticleListItem />
            </div>
        </section>
    )
}