import styles from './ContentSpace.module.css';
import Article from './Article';
import ArticleList from './ArticleList';
import HomePage from './HomePage';
import { Routes, Route } from 'react-router-dom';

export default function ContentSpace() {
    return (
        <section id={styles.contentSpace}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/articles/:articleName' element={<Article />} />
            </Routes>
        </section>
    )
}