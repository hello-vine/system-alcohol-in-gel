const express = require('express');

const admsController = require('./controllers/adms-controller');

const usersController = require('./controllers/users-controller');

const routes = express.Router();

// List all adms
routes.get('/adms', admsController.index);

// Route adms, async ad with id generator
routes.post('/adms', admsController.create);

// List all users
routes.get('/users', usersController.index);

// Route users, async ad with id generator
routes.post('/users', usersController.create);

// Exports
module.exports = routes;