const data = require('../data/zoo_data');

// getEmployeesCoverage({ name: 'Sharonda' });
// getEmployeesCoverage({ name: 'Spry' });
// getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });

function getSpecie(idAnimal) {
  const speciesFind = data.species.find(({ id }) => id === idAnimal);
  return speciesFind.name;
}
function createArrayArraysAnimals() {
  const arrayAnimalNames = [];
  data.employees.forEach((employee) => {
    const arrayAnimalsEmployee = [];
    const { responsibleFor } = employee;
    responsibleFor.forEach((idAnimal) => {
      arrayAnimalsEmployee.push(getSpecie(idAnimal));
    });
    arrayAnimalNames.push(arrayAnimalsEmployee);
  });
  return arrayAnimalNames;
}
console.log(createArrayArraysAnimals());
function createArrayArraysLocations() {
  const arrayAnimals = createArrayArraysAnimals();
  const arrayArraysLocations = arrayAnimals.map((arrayEmployeesAnimals) => {
    const arrayLocations = [];
    arrayEmployeesAnimals.forEach((animal) => {
      const locationAnimal = data.species.find((specie) => specie.name === animal).location;
      arrayLocations.push(locationAnimal);
    });
    return arrayLocations;
  });
  return arrayArraysLocations;
}
function arrayGeneral() {
  const arrayEmployees = [];
  data.employees.forEach((employee, index) => {
    const obj = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: createArrayArraysAnimals()[index],
      locations: createArrayArraysLocations()[index],
    };
    arrayEmployees.push(obj);
  });
  return arrayEmployees;
}

function getOneEmployee(objNameOrLastName) {
  const { name } = objNameOrLastName;
  const objFind = data.employees
    .find(({ firstName, lastName }) => firstName === name || lastName === name);
  if (!objFind) {
    throw new Error('Informações inválidas');
  }
  const { firstName, lastName } = objFind;
  const objEmployee = arrayGeneral();
  return objEmployee.find(({ fullName }) => fullName === `${firstName} ${lastName}`);
}

function getEmployeeById(employeeId) {
  const objFind = data.employees.find(({ id }) => id === employeeId.id);
  if (!objFind) {
    throw new Error('Informações inválidas');
  }
  const { firstName, lastName } = objFind;
  const objEmployee = arrayGeneral();
  return objEmployee.find(({ fullName }) => fullName === `${firstName} ${lastName}`);
}

function getEmployeesCoverage(objParam) {
  if (!objParam) return arrayGeneral();

  if (objParam.name) return getOneEmployee(objParam);

  if (objParam.id) return getEmployeeById(objParam);
}

module.exports = getEmployeesCoverage;
