//Initializes Express Using ES
import express from 'express';
import articleRouter from './articleRoutes.js';

//Initializes Express App
const app = express();

//Defines THe Port We Will Listen On.
const port = '5173';

//Middleware That Runs For Article Routes. 
app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Ensures We Are Listening At The Specified Port.
app.listen(port, () => {
    console.log('Now Listening On ' + port);
});

