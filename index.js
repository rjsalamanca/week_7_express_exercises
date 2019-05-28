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

app.get('/name', (req,res)=>{
    console.log(req.query)
});