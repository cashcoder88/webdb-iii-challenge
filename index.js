const express = require('express');


const knex = require('knex');
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    // get the roles from the database
    res.status(200).json('Testing, Sanity Check')
  });
  

const port = process.env.PORT || 3000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
