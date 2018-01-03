const faker = require('faker');
const jsonfile = require('jsonfile');

const file = 'db.json';
const db = { movies: [] };

for (let i = 1; i <= 50; i += 1) {
  db.movies.push({
    avatar: faker.image.image(),
    name: faker.random.words(),
    description: faker.lorem.paragraph(),
    director: `${faker.name.firstName()} ${faker.name.lastName()}`,
    rating: Math.floor((Math.random() * 100) + 1) / 10,
    dateRelease: faker.date.past(),
  });
}

jsonfile.writeFile(file, db, { spaces: 2 }, (err) => {
  if (!err) {
    console.log('Database file created successfully!')
  } else {
    console.error(err);
  }
});
