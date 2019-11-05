const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();
app.set('view engine','ejs');
// optional: include if accepting post data
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true,useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected!!!');
});


app.get('/', function(request, response){
  response.render('index');
})

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});