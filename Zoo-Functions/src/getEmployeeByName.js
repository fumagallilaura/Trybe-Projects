const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const empName = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return empName;
}

module.exports = getEmployeeByName;
