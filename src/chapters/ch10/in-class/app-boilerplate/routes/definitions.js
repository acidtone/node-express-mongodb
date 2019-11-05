const express = require('express');
const defRouter = express.Router();
const Definition = require('../models/definitions.js');

// GET "/"

defRouter.get('/', async function(request, response) {
  console.log('GET /');
  try {
    const definitions = await Definition.find({});
    response.render('definitions',{definitions: definitions})
  } catch (err) {
    return response.status(500).send(err);
  }
})

// GET "/definitions"
// GET "/new"
// POST "/definitions"

module.exports = defRouter;