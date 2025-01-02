import express from 'express';
import pool from './db.js';

//Creates A New Router.
const reviewsRouter = express.Router();

//Handles Routes To The /Articles Page.
reviewsRouter.get('/', async (req, res) => {
    try {
        //Queries The Database For All Reviews.
        const response = await pool.query(`SELECT * FROM reviews LIMIT 10;`);

        //Sends The Response To The Client With A Successful Status Code.
        res.status(200).json(response.rows);

    } catch(error) {
        //Logs The Error To The Console.
        console.error(error);

        //Sends An Error Back To The Client With A 500 Status Code.
        res.status(500).send('Server Error. The Server Does Not Know How To Handle This Request. Please Try Again.');
    }
});

//Handles Routes For Specific Review Articles.
reviewsRouter.get('/:reviewName', async (req, res) => {
    try {
        //Grabs The Article Name From The Parameters.
        const reviewName = req.params.reviewName;

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
        `, [reviewName]);


        //If Successful, Returns A Response With A Successful Status Code.
        res.status(200).json(response.rows);
    } catch (error) {
        //Logs Error To The Console.
        console.error(error);

        //Sends An Error Back To The Client With A 500 Status Code.
        res.status(500).send('Server Error');
    }
});

//Exports The Router After The Creation Of All Routes.
export default reviewsRouter;