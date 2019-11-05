const express = require('express');
const defRouter = express.Router();
const Definition = require('../models/definitions.js');

// GET "/definitions"

defRouter.get('/', async function(request, response) {
  console.log('GET /');
  try {
    const definitions = await Definition.find({});
    response.render('definitions',{definitions: definitions})
  } catch (err) {
    return response.status(500).send(err);
  }
});

// GET "/defintions/new"
defRouter.get('/new', function(request, response){
  console.log('GET /definitions/new');
  response.render('definitions-form',{});
});

// POST "/definitions"
defRouter.post('/', function(request, response){
  console.log('POST /definitions');
  
  request.body.slug = request.body.term;
  const definition = new Definition(request.body);

  definition.save(function(err){
    if (err) throw err;
    response.redirect('/definitions/new');
  });

});


module.exports = defRouter;