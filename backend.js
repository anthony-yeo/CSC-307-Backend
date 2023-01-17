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

app.get('/users/:id', (req, res) => {
    const id = req.params['id'];
    let result = findUserById(id);
    if (result === undefined || result.length ==  0)
        res.status(404).send('Resource not found');
    else{
        result = {users_list: result};
        res.send(result);
    }
});

function findUserById(id){
    return users['users_list'].find((user) => user['id'] === id);
    //Find returns the first occurence that matches the conditions
}

app.listen(port, () => {                //Listen to incoming requests on our defined port
    console.log(`Example app listening at http://localhost:${port}'`);
});



