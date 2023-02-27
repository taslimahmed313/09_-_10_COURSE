const express = require('express');
const app = express();
const phones = require('./phones.json')
const cors = require('cors');
const port = 5000;

app.use(cors())

app.get('/', (req, res)=>{
    res.send('This Mama, Who d is iPhone Hunter Server !!')
})

app.get('/phones', (req, res)=>{
    res.send(phones)
})

app.get('/phones/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log('Looking For Id', id);

    const phone = phones.find(ph=> ph.id === id) || {};
    res.send(phone)
})

app.listen(port, ()=>{
    console.log(`iphone Hunter Running The Port: ${port}`)
})