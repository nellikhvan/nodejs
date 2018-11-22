
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
          {
              "id": 1,
              "name": "Hercules",
              "breed": "Shiba Inu",
              "birth_year": 2013,
              "photo": "https://upload.wikimedia.org/wikipedia/commons/d/df/Doge_homemade_meme.jpg",
              "user_id": 1
          },
          {
              "id": 2,
              "name": "Pavel",
              "breed": "Chau Chau",
              "birth_year": 2010,
              "photo": "https://img-ovh-cloud.zszywka.pl/0/0532/0086-chau-chau-panda-d-.jpg",
              "user_id": 2
          },
          {
              "id": 3,
              "name": "Pongo",
              "breed": "Akita Inu",
              "birth_year": 2011,
              "photo": "https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg",
              "user_id": 2
          }
      ]);
    });
};
