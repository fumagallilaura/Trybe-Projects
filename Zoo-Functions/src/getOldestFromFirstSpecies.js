const data = require('../data/zoo_data');

// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

// A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

function getOldestFromFirstSpecies(id) {
  const objEmployee = data.employees.find((employee) => employee.id === id);
  const arrayResponsAnimal = objEmployee.responsibleFor;
  const objFirstSpecie = data.species.find((specie) => specie.id === arrayResponsAnimal[0]);
  const biggestAge = objFirstSpecie.residents.reduce((acc, resident) => {
    if (resident.age > acc) return resident.age;
    return acc;
  }, 0);
  const objAnimalIWant = objFirstSpecie.residents.find((resident) => resident.age === biggestAge);
  return [`${objAnimalIWant.name}`, `${objAnimalIWant.sex}`, objAnimalIWant.age];
}

module.exports = getOldestFromFirstSpecies;
