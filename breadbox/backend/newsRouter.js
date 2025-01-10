import express from 'express';
import pool from './db.js';

//Creates A New Router.
const newsRouter = express.Router();

//Handles Routes To The /News Page.
newsRouter.get('/', async (req, res) => {
    try {
        //Creates A Variable To Hold Database Response.
        const queryResponse = await pool.query(`
            SELECT 
            id AS id,
            title,
            subtitle,
            article_image AS thumbnail,
            article_slug AS slug
            FROM news LIMIT 5;`);

        //If Successful, Returns A Response With A Successful Status Code.
        res.status(200).json(queryResponse.rows);

    } catch (error) {
        //Logs The Error To The Console.
        console.error(error);

        //Sends An Error Back To The Client With A Error Status Code.
        res.status(500).send('Server Error. The Server Does Not Know How To Handle This Request. Please Try Again.');
    }
});

//Handles Routes To Grab The Most Recent News.
newsRouter.get('/recent', async (req, res) => {
    try {
        const response = await pool.query(`
            SELECT
            id AS news_id,
            title,
            article_image AS thumbnail,
            article_slug AS slug
            FROM news
            ORDER BY created_at DESC
            LIMIT 4;
            `);    

        if(response.rows.length === 0) {
            res.status(404).json({status: 404, message: 'Failed To Fetch Recent News.'});
        }

        //If Both Checks Pass, Returns A Response With A Successful Status Code.
        res.status(200).json({status: 200, data: response.rows});
    } catch (error) {
        //Logs The Error To The Console.
        console.error(error);
    }
});

//Handles Routes For A Specific News Article.
newsRouter.get('/:newsName', async (req, res) => {
    try {
        //Grabs The Article Name From The Parameters
        const newsName = req.params.newsName;

        //Queries The Database For The Article Slug.
        const queryResponse = await pool.query(`SELECT
            news.id AS news_id,
            news.title,
            news.subtitle,
            news.content,
            news.article_image AS thumbnail,
            authors.name AS author_name
            FROM news
            JOIN authors ON news.author_id = authors.id
            WHERE article_slug = $1;
            `, [newsName]);

        //Checks The Reseponse For Empty Rows
        if (queryResponse.rows.length === 0) {
            return res.status(404).json({ status: 404, message: 'News Article Not Found.' });
        }

        //If Successful, Returns A Response With A Successful Status Code.
        res.status(200).json(queryResponse.rows);
    } catch(error) {
        //Logs The Error To The Console.
        console.error(error);

        //Sends An Error Back To The Client With A Error Status Code.
        res.status(500).send('Server Error. The Server Does Not Know How To Handle This Request. Please Try Again.');
    }
});

//Exports The Router After The Creation Of All Routes.
export default newsRouter;

