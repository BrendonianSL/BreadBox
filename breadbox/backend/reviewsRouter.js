import express from 'express';
import pool from './db.js';
import { resolvePath } from 'react-router';

//Creates A New Router.
const reviewsRouter = express.Router();

//Handles Routes To The /Articles Page.
reviewsRouter.get('/', async (req, res) => {
    try {
        //Queries The Database For All Reviews.
        const response = await pool.query(`
            SELECT 
            reviews.id AS review_id,
            title,
            subtitle,
            article_image AS thumbnail,
            article_slug AS slug
            FROM reviews LIMIT 5;
        `);

        //Sends The Response To The Client With A Successful Status Code.
        res.status(200).json(response.rows);

    } catch(error) {
        //Logs The Error To The Console.
        console.error(error);

        //Sends An Error Back To The Client With A 500 Status Code.
        res.status(500).send('Server Error. The Server Does Not Know How To Handle This Request. Please Try Again.');
    }
});

//Routes To Fetch The Most Recent Article.
reviewsRouter.get('/recent', async (req, res) => {
    try {
        const response = await pool.query(`
            SELECT
            reviews.id AS review_id,
            reviews.title,
            reviews.article_image AS thumbnail,
            reviews.article_slug AS slug
            FROM reviews
            ORDER BY created_at DESC
            LIMIT 4;
          `);

          //If Successful, Return A Response With A Successful Status Code.
          res.status(200).json({status: 200, data: response.rows});
    } catch (error) {
        //Logs The Error To The Console.
        console.error(error);
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
            reviews.article_image AS thumbnail,
            authors.name AS author_name,
            review_verdicts.verdict
            FROM reviews
            JOIN 
            authors ON reviews.author_id = authors.id
            JOIN 
            review_verdicts ON reviews.review_verdict = review_verdicts.id
            WHERE article_slug = $1;
        `, [reviewName]);

        //Checks The Reseponse For Empty Rows
        if (response.rows.length === 0) {
            return res.status(404).json({ status: 404, message: 'Review Not Found' });
        }

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