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
    return db('students');
}

function findById(id) {
    return db('students')
        .where( {id} )
        .first();
}

function findCohortStudentsById(cohort_id) {
    return db('students')
    .where({cohort_id})
}

function add(body) {
    return db('students')
    .insert(body, 'id')
}
  
function update(id, changes) {
    return db('students')
    .where({ id} )
    .update(changes)
}
  
function remove(id) {
    return db('students')
    .where({ id})
    .del()
}