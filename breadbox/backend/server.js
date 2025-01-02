//Imported Express, Cross Origin Resource Sharing, And Pool For Databse Connection.
import express from 'express';
import cors from 'cors';
import pool from './db.js';

//Imports Reviews Router & News Router.
import reviewsRouter from './reviewsRouter.js';
import newsRouter from './newsRouter.js';


//Initializes Express App & Defines The Port.
const app = express();
const port = '3000';

//Uses Cross Origin Resource Sharing For ALL ROUTES. Needed During Development Phase.
app.use(cors());

//Defines A Middleware To Catch All Review Based Requests.
app.use('/reviews', reviewsRouter);

//Defines A Middleware To Catch All News Based Requests.
app.use('/news', newsRouter);

//Handles All Request To The Homepage.
app.get('/', async (req, res) => {
    try {
        //Queries The Database For All Articles.
        const response = await pool.query(`
            SELECT
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
            review_verdicts ON reviews.review_verdict = review_verdicts.id;
        `);
        
        //Sends The Rows Back To The Client.
        res.json(response.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

//Ensures We Are Listening At The Specified Port.
app.listen(port, () => {
    console.log('Now Listening On ' + port);
});

