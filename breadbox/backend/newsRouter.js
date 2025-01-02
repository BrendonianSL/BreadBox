import express from 'express';
import pool from './db.js';

//Creates A New Router.
const newsRouter = express.Router();

//Handles Routes To The /News Page.
newsRouter.get('/', async (req, res) => {
    try {
        //Creates A Variable To Hold Database Response.
        const queryResponse = await pool.query(`SELECT * FROM news LIMIT 10;`);

        //If Successful, Returns A Response With A Successful Status Code.
        res.status(200).json(queryResponse.rows);

    } catch (error) {
        //Logs The Error To The Console.
        console.error(error);

        //Sends An Error Back To The Client With A Error Status Code.
        res.status(500).send('Server Error. The Server Does Not Know How To Handle This Request. Please Try Again.');
    }
});

//Handles Routes For A Specific News Article.
newsRouter.get('/:newsName', async (req, res) => {
    try {
        //Grabs The Article Name From The Parameters
        const newsName = req.params.newsName;

        //Creates A Variable To Hold Database Response.
        const queryResponse = await pool.query(
            `SELECT * FROM news`
        );

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

