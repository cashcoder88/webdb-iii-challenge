const express = require('express');


// const knex = require('knex');
// const knexConfig = require('./knexfile.js')
// const db = knex(knexConfig.development);

const db = require('./dbConfig.js')

const server = express();

server.use(express.json());

  
server.get('/api/cohorts', async (req, res) => {
    // get the roles from the database
    try {
      const cohorts = await db('cohorts'); // all the records from the table
      res.status(200).json(cohorts);
    } catch (error) {
      res.status(500).json(error);
    }
  });

const port = process.env.PORT || 3000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
