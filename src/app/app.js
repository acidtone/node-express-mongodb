const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const definitions = require('./definitions');

const app = express();

app.set('view engine','ejs');

app.get('/', function(request, response){
  response.render('index',{definitions: definitions});
})

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 'poo';

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
