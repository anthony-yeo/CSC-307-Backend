const express = require('express');     //Import Express Module
const app = express();                  //Create Instance of Express
const port = 5000;                      //Define Port Number

//export DEBUG='express:router'

const users = { 
    users_list :
    [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: 'Janitor',
       },
       {
          id : 'abc123', 
          name: 'Mac',
          job: 'Bouncer',
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: 'Professor',
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: 'Aspring actress',
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: 'Bartender',
       }
    ]
 }
 
 

app.use(express.json());                //Process Data as JSON format

app.get('/', (req, res) => {            //API Endpoint
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    const name = req.query.name;
    if (name != undefined){
        let result = findUserByName(name);
        result = {users_list: result};
        res.send(result);
    }
    else{
        res.send(users);
    }
});

const findUserByName = (name) =>{
    return users['users_list'].filter( (user) => user['name'] === name);
}

app.listen(port, () => {                //Listen to incoming requests on our defined port
    console.log(`Example app listening at http://localhost:${port}'`);
});



