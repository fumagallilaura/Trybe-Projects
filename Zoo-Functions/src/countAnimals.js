const data = require('../data/zoo_data');

const getCounter = (arrResident, animal) => {
  let counter = 0;
  arrResident.forEach((anim) => {
    if (anim.sex === animal.sex) {
      counter += 1;
    }
  });
  return counter;
};

function countAnimals(animal) {
  const obj = {};
  if (animal === undefined) {
    const namesAnimals = data.species.map((specie) => specie.name);
    const counterAnimals = data.species.map((specie) => specie.residents.length);
    namesAnimals.forEach((nameSpecie, index) => {
      obj[`${nameSpecie}`] = counterAnimals[index];
    });
    return obj;
  }
  const animalObj = data.species.find((speci) => speci.name === animal.specie);
  if (animal.sex === undefined) {
    return animalObj.residents.length;
  }
  return getCounter(animalObj.residents, animal);
}

module.exports = countAnimals;
