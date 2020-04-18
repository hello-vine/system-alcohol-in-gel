const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {

    // List all adms
    async index(request, response) {

        // The 'connection' makes the connection to the database.
        const adms = await connection('adms').select('*');
    
        // Return a array
        return response.json(adms);
    
    },

    // Register an adm in the database, route /adms, async ad with id generator
    async create(request, response) {

        // Get informations
        const { name, email, password } = request.body;

        // Id generator
        const id = crypto.randomBytes(4).toString('HEX');

        // Insert this informations into the table
        await connection('adms').insert({

            id,
            name,
            email,
            password

        });

        // Returns what I want to show on the display
        return response.json({ id });

    }

}