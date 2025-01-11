import express from 'express';

// Creates A New Router
const newsRouter = express.Router();

// Handles Routes To The /News Page
newsRouter.get('/', async (req, res) => {
    try {
        const { data, error } = await req.supabase
            .from('news')
            .select('id, title, subtitle, article_image, article_slug')
            .limit(5);

        if (error) {
            throw error;
        }

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error. The Server Does Not Know How To Handle This Request. Please Try Again.');
    }
});

// Handles Routes To Grab The Most Recent News
newsRouter.get('/recent', async (req, res) => {
    try {
        const { data, error } = await req.supabase
            .from('news')
            .select('id, title, article_image, article_slug')
            .order('created_at', { ascending: false })
            .limit(4);

        if (error) {
            throw error;
        }

        if (data.length === 0) {
            return res.status(404).json({ status: 404, message: 'Failed To Fetch Recent News.' });
        }

        res.status(200).json({ status: 200, data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Handles Routes For A Specific News Article
newsRouter.get('/:newsName', async (req, res) => {
    try {
        const newsName = req.params.newsName;

        const { data, error } = await req.supabase
            .from('news')
            .select(`
                id, 
                title, 
                subtitle, 
                content, 
                article_image, 
                authors(name)
            `)
            .eq('article_slug', newsName)
            .single(); // Ensure you fetch only one record

        if (error) {
            throw error;
        }

        if (!data) {
            return res.status(404).json({ status: 404, message: 'News Article Not Found.' });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error. The Server Does Not Know How To Handle This Request. Please Try Again.');
    }
});

// Exports the router
export default newsRouter;
