const express = require('express');
const path = require('path');

// init app
const app = express();

//start server
const port = 2222;
app.listen(port, () => console.log('Tutors app server listening on port ' +port+'!') )

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//home route
app.get('/', function(req, res){
    res.render('index');
 });