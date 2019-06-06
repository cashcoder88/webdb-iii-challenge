
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Cash Globe', cohort_id: 1},
        {name: 'Vijay Das', cohort_id: 1},
        {name: 'Thierry Harjoth', cohort_id: 1}
      ]);
    });
};
