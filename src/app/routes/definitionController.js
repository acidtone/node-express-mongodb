const express = require("express");
const definitionRouter = express.Router();
const definition = require('../models/definitions.js');

definitionRouter.post("/", function(request, response) {
    const post = new Post(request.body);
    post.save(err => {
      if (err) throw err;
      res.redirect("/");
    });
  });

  module.exports = definitionRouter;