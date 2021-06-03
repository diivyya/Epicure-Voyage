const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Place = require('./models/place');

mongoose.connect('mongodb://localhost:27017/epicure-voyage',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,"Connection error:"));
db.once('open',()=>{
    console.log('Database connected!');
});

const app = express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/addplace', async(req,res) => {
   const hotel = new Place({title:'Satvik', description:'Cheap and family place'});
   await hotel.save();
   res.send(hotel);
})

app.listen(3000, function() {
    console.log('SERVING ON PORT 3000')
})