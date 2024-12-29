import express from 'express';
import pool from './db.js';

const articleRouter = express.Router();

articleRouter.get('/', (req, res) => {
     res.send('All Articles');
});

articleRouter.get('/:articleName', async (req, res) => {
    try {
        //Grabs The Article Name From The Parameters.
        const articleName = req.params.articleName;

        console.log(articleName);

        //Queries The Database For The Article Slug.
        const response = await pool.query(`SELECT
            reviews.id AS review_id,
            reviews.title,
            reviews.subtitle,
            reviews.content,
            reviews.verdict_description,
            authors.name AS author_name,
            review_verdicts.verdict
            FROM reviews
            JOIN 
            authors ON reviews.author_id = authors.id
            JOIN 
            review_verdicts ON reviews.review_verdict = review_verdicts.id
            WHERE article_slug = $1;
        `, [articleName]);

        res.json(response.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
    
});

export default articleRouter;