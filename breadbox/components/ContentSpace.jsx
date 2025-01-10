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
                <Route path='/reviews' element={<ArticleList />} />
                <Route path='/reviews/:reviewName' element={<Article />} />
                <Route path='/news' element={<ArticleList />} />
                <Route path='/news/:newsName' element={<Article />} />
            </Routes>
        </section>
    )
}