const express = require('express');


// const knex = require('knex');
// const knexConfig = require('./knexfile.js')
// const db = knex(knexConfig.development);

const Cohorts = require('./cohorts-model')
const Students = require('./students-model')

// const db = require('./dbConfig.js')

const server = express();

server.use(express.json());

/* 
- [] `[POST] /api/cohorts` This route should save a new cohort to the database.
- [x] `[GET] /api/cohorts` This route will return an array of all cohorts.
- [x] `[GET] /api/cohorts/:id` This route will return the cohort with the matching `id`.
- [] `[GET] /api/cohorts/:id/students` returns all students for the cohort with the specified `id`.
- [] `[PUT] /api/cohorts/:id` This route will update the cohort with the matching `id` using information sent in the body of the request.
- [] `[DELETE] /api/cohorts/:id` This route should delete the specified cohort.

*/
server.get('/api/cohorts', async (req, res) => {
    // get the roles from the database
    try {
      const cohorts = await Cohorts.find(); // all the records from the table
      res.status(200).json(cohorts);
    } catch (error) {
      res.status(500).json(error);
    }
});



server.get('/api/cohorts/:id', (req, res) => {
    const {id} = req.params;
    Cohorts.findById(id)
    .then(cohort => {
        res.status(200).json(cohort)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});



server.get('/api/cohorts/:id/students', async (req, res) => {
    const id = req.params.id
    try {
        const students = await Cohorts.findCohortStudentsById(id); // all the records from the table
        res.status(200).json(students);
      } catch (error) {
        res.status(500).json(error);
      }
});


//----------------------------------------------------
// STUDENTS 
//----------------------------------------------------
server.get('/api/students', async (req, res) => {
    // get the roles from the database
    try {
      const students = await Students.find(); // all the records from the table
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json(error);
    }
});

const port = process.env.PORT || 3000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
