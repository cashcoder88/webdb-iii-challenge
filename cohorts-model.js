const db = require('./dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findCohortStudentsById
}

function find() {
    return db('cohorts');
}

function findById(id) {
    return db('cohorts')
        .where( {id} )
        .first();
}

function findCohortStudentsById(cohort_id) {
    return db('students')
    .where({cohort_id})
}

function add(body) {
    return db('cohorts')
    .insert(body, 'id')
}
  
function update(id, changes) {
    return db('cohorts')
    .where({ id} )
    .update(changes)
}
  
function remove(id) {
    return db('cohorts')
    .where({ id})
    .del()
}