
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          {
              "id": 1,
              "name": "Arthur Dent",
              "email": "dent@example.com",
              "password": "Password123!",
              "disabled": false
          },
          {
              "id": 2,
              "name": "Ford Prefect",
              "email": "prefect@example.com",
              "password": "Password123!",
              "disabled": false
          }
      ]);
    });
};
