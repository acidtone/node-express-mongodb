const express = require("express");
const definitionRouter = express.Router();
const controller = require('./controller.js');

definitionRouter.get('/', controller.getAll)



module.exports = definitionRouter;