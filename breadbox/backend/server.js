//Imported Express, Cross Origin Resource Sharing, And Pool For Databse Connection.
import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import pool from './db.js'; // Assuming you're still using pg-pool
import dotenv from 'dotenv';

//Imports Reviews Router & News Router.
import reviewsRouter from './reviewsRouter.js';
import newsRouter from './newsRouter.js';

dotenv.config({ path: '../.env' });

console.log(process.env.SUPABASE_URL);

// Initialize Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// Initialize Express App & Define The Port
const app = express();
const port = '3000';

// Middleware to use CORS for all routes (during development)
app.use(cors());

// Attach the Supabase client to the request object
app.use((req, res, next) => {
  req.supabase = supabase; // Make Supabase client available in every route
  next();
});

// Define middleware to catch all review-based requests
app.use('/reviews', reviewsRouter);

// Define middleware to catch all news-based requests
app.use('/news', newsRouter);

// Homepage route using Supabase instead of the pg pool
app.get('/', async (req, res) => {
    try {
        // Example of using Supabase to query reviews instead of pg-pool
        const { data, error } = await req.supabase
            .from('reviews')
            .select(`
                id, 
                title, 
                subtitle, 
                content, 
                verdict_description, 
                article_image, 
                authors:name, 
                review_verdicts:verdict
            `)
            .join('authors', 'reviews.author_id', 'authors.id')
            .join('review_verdicts', 'reviews.review_verdict', 'review_verdicts.id');

        if (error) {
            throw error;
        }

        // Sends the rows back to the client
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Ensure the app is listening at the specified port
app.listen(port, () => {
    console.log('Now Listening On ' + port);
});
