const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());                   

const destination = require('./data/spots.json');
const spot = require('./data/spot.json');
const hotel = require('./data/hotel.json');

app.get('/', (req, res)=>{
    res.send('New Destination is Coming !!!')
})

app.get('/spots', (req, res)=>{
    res.send(destination);
} )

app.get('/spot/:id', (req, res)=>{
    const id = req.params.id;
    const spotsId = spot.filter(s => s.spot_id === id);
    res.send(spotsId);
})

app.get('/hotel/:id', (req, res)=>{
    const id = req.params.id;
    const hotelId = hotel.filter(h => h.spot_id === id);
    res.send(hotelId);
})



app.listen(port, ()=>{
    console.log('Your port is', port);       
})

module.exports = app;