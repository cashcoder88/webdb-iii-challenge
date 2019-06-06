
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Cash Globe'},
        {name: 'Vijay Das'},
        {name: 'Thierry Harjoth'}
      ]);
    });
};
