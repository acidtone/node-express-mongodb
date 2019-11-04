const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const definitions = require('./definitions');

const uri = process.env.DB_CONNECTION;
MongoClient.connect(uri,{ useUnifiedTopology: true,useNewUrlParser: true }, function(err, client) {
   if(err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   // perform actions on the collection object

   const db = client.db("glossary");

   const collection = db.collection('definitions');

   collection.drop();

   collection.insertMany(definitions, function(err, cursor) {
    if (err) {
      console.log('There was a problem');
    }
    console.log(cursor.insertedCount);
  });
  client.close();
});