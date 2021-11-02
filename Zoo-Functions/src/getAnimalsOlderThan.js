const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const objAnimal = data.species.find((specie) => specie.name === animal).residents;
  const compare = objAnimal.filter((animalName) => animalName.age >= age);
  if (compare.length === objAnimal.length) {
    return true;
  }
  return false;
}

module.exports = getAnimalsOlderThan;
