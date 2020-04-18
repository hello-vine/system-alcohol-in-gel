const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {

    // List all users
    async index(request, response) {

        // The 'connection' makes the connection to the database.
        const users = await connection('users').select('*');
    
        // Return a array
        return response.json(users);
    
    },

    // Register an user in the database, route /users, async ad with id generator
    async create(request, response) {

        // Get informations
        const { name, email, password } = request.body;

        // Id generator
        const id = crypto.randomBytes(4).toString('HEX');

        // Insert this informations into the table
        await connection('users').insert({

            id,
            name,
            email,
            password

        });

        // Returns what I want to show on the display
        return response.json({ id });

    }

}