import styles from './Article.module.css';
import ReviewVerdict from './ReviewVerdict';
import { useEffect, useState } from 'react';

export default function Article() {

    const [message, setMessage] = useState('');

    //Runs On Compononet Mount To Fetch Data.
    useEffect(() => {
        //Creates An Async Function To Fetch Data.
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000');

                if (!response.ok) {
                    throw new Error('Network Response Was Not Ok');
                }

                const data = await response.json();

                setMessage(data.message);
            } catch (error) {
                console.log(error);
            }
        }
        //Calls The Async Function.
        fetchData();
    }, []);


    return (
        <h1>{message + 'A'}</h1>
    )
}