const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const nameMana = data.employees.filter((manage) => manage.managers.includes(managerId));
  const mapName = nameMana.map((name) => `${name.firstName} ${name.lastName}`);
  return mapName;
}

module.exports = { isManager, getRelatedEmployees };
