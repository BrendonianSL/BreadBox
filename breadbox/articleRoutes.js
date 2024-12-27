import express from 'express';

const articleRouter = express.Router();

articleRouter.get('/', (req, res) => {
     res.send('All Articles');
});

articleRouter.get('/:id', (req, res) => {
    res.send('Searched Article By ID');
});

export default articleRouter;