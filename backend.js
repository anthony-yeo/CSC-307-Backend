const express = require('express');     //Import Express Module
const app = express();                  //Create Instance of Express
const port = 5000;                      //Define Port Number

app.use(express.json());                //Process Data as JSON format

app.get('/', (req, res) => {            //API Endpoint
    res.send('Hello World!');
});

app.listen(port, () => {                //Listen to incoming requests on our defined port
    console.log(`Example app listening at http://localhost:${port}'`);
})