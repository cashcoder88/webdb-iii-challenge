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
    return db('zoos');
}

function findById(id) {
    return db('zoos')
        .where( {id} )
        .first();
}

function findCohortStudentsById(cohort_id) {
    return db('students as s')
    .where({cohort_id})
}

function add(body) {
    return db('zoos')
    .insert(body, 'id')
}
  
function update(id, changes) {
    return db('zoos')
    .where({ id} )
    .update(changes)
}
  
function remove(id) {
    return db('zoos')
    .where({ id})
    .del()
}