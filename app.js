const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const app = express();



//server setup.................................................................................................................

app.set('view engine', 'ejs');


const dbURI = 'mongodb+srv://DJA321:DJA7531@cluster0.0cxb5.mongodb.net/portfolio?retryWrites=true&w=majority';



mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {

        app.listen(port);
        console.log('server running at', port);

    })
    .catch(err =>{
        console.log(err);
    })




app.use(morgan('dev'));

app.use(express.static('public'));



//home page....................................................................................................................
app.get('/', (req, res) => {
    res.render('index', { tiltle: 'Home' });
});





//education.......................................................................................................................
app.get('/education', (req, res) => {
    res.render('education', { tiltle: 'Education' });
});





//interest.......................................................................................................................
app.get('/interest', (req, res) => {
    res.render('interest', { tiltle: 'Interest' });
});




//achievement....................................................................................................................
app.get('/achievement', (req, res) => {
    res.render('achievement', { tiltle: 'Achievement' });
});


//middleware......................................................................................................................
app.use((req, res) => {
    res.send('404 not found')
});
