import express from 'express';

// Creates an instance of the Express Router object
const articleRouter = express.Router();

articleRouter.get('/', (req, res) => {
    console.log('We Are Here');
    res.send('All Articles Fetched');
});

articleRouter.get('/:id', (req, res) => {
    res.send('Article Fetched Based on ID');
});

// Exports Router
export default articleRouter;
