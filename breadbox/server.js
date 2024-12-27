//Initializes Express Using ES
import express from 'express';

//Initializes Express App
const app = express();

//Defines THe Port We Will Listen On.
const port = '5173';

//Ensures We Are Listening At The Specified Port.
app.listen(port, () => {
    console.log('Now Listening On ' + port);
});

