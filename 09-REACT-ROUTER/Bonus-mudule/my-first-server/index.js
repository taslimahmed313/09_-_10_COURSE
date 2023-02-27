const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send('Hello Mr. and Mrs From Node Js!!')
})

app.listen(port, ()=>{
    console.log(`Example Listening From Port: ${port}`)
})