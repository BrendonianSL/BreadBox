//Imported Express.
import express from 'express';
import cors from 'cors';

//Imported Article Router.
import articleRouter from './articleRoutes.js';

//Initializes Express App
const app = express();

//Defines The Port.
const port = '3000';

//Uses Cross Origin Resource Sharing For ALL ROUTES. Needed During Development Phase.
app.use(cors());

//Defines A Middleware To Catch All Article Based Requests.
app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    console.log('Home Page Receieved');
    res.json({
        message: 'Home Page',
    });
});

//Ensures We Are Listening At The Specified Port.
app.listen(port, () => {
    console.log('Now Listening On ' + port);
});

