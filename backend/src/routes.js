const express = require('express');

const routes = express.Router();

routes.post('/adms', (request, response) => {

    const { name, email, password } = request.body;

    console.log(data);

    return response.json();

});

module.exports = routes;