const express = require('express');
const app = express();
const port = 1337;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});

app.get('/',(req,res)=>{
    console.log('REQUEST IS : ',req.query);
    const {firstName, lastName} = req.query;
    res.send(`hello world ${firstName} ${lastName}`).end();
});

app.get('/cats', (req,res)=>{
    res.send('meow').end();
});

app.get('/dogs', (req,res)=>{
    res.send('dogs').end();
});

app.get('/cats_and_dogs', (req,res)=>{
    res.send('living together').end();
});

app.get('/greet/:name', (req,res)=>{
    const name = req.params.name;
    res.send('Hello, ' + name).end();
});

app.get('/hello1', function(req, res){

    console.log(req.query)
    var year = 2019 - req.query.age;

    res.send('You were born in  ' + year + '.');
});