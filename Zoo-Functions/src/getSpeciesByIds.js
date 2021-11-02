const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    const emptyArray = [];
    return emptyArray;
  }
  const result = [];
  data.species.forEach((specie) => {
    ids.forEach((id) => {
      if (specie.id === id) {
        result.push(specie);
      }
    });
  });
  return result;
}

module.exports = getSpeciesByIds;
