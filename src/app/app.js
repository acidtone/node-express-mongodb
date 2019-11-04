const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Definition = require('./models/definitions');

const app = express();
mongoose.set('debug', true);

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected!!!');
});

app.set('view engine','ejs');


app.get('/', async function(request, response) {
  try {

    const definitions = await Definition.find();
    response.render('index',{definitions: definitions});

  } catch (err) {
    return res.status(500).send(err);
  }
});

// app.get('/', function(request, response){
//   response.render('index',{definitions: definitions});
// })

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 'poo';

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
