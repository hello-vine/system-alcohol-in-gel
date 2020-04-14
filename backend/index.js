const express = require('express');

const app = express();

app.get('/', (request, response) => {

    return response.json({

        Name: "Hello-vine",
        Text: "I'm a good boy"

    });

});

app.listen(3333);