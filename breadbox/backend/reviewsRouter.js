import express from 'express';

// Creates A New Router
const reviewsRouter = express.Router();

// Handles Routes To The /Reviews Page
reviewsRouter.get('/', async (req, res) => {
    try {
        const { data, error } = await req.supabase
        .from('reviews')
        .select('id, title, subtitle, article_image, article_slug')
        .limit(5);

        console.log(data);
        if (error) {
            throw error;
        }

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error. The Server Does Not Know How To Handle This Request. Please Try Again.');
    }
});

// Handles Routes To Fetch The Most Recent Reviews
reviewsRouter.get('/recent', async (req, res) => {
    try {
        const { data, error } = await req.supabase
            .from('reviews')
            .select('id, title, article_image, article_slug')
            .order('created_at', { ascending: false })
            .limit(4);

        if (error) {
            throw error;
        }

        if (data.length === 0) {
            return res.status(404).json({ status: 404, message: 'Failed To Fetch Recent Reviews.' });
        }

        res.status(200).json({ status: 200, data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Handles Routes For A Specific Review Article
reviewsRouter.get('/:reviewName', async (req, res) => {
    try {
        const reviewName = req.params.reviewName;

        const { data, error } = await req.supabase
            .from('reviews')
            .select(`
                id, 
                title, 
                subtitle, 
                content, 
                verdict_description, 
                article_image, 
                authors(name), 
                review_verdicts(verdict)
            `)
            .eq('article_slug', reviewName)
            .single(); // Ensure you fetch only one record
    
        if (error) {
            throw error;
        }

        if (!data) {
            return res.status(404).json({ status: 404, message: 'Review Not Found.' });
        }

        console.log("success");
        res.status(200).json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server Error. The Server Does Not Know How To Handle This Request. Please Try Again.');
    }
});


// Exports the router
export default reviewsRouter;
