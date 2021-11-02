const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const peopleChild = entrants.filter((elem) => elem.age < 18);
  const peopleAdult = entrants.filter((elem) => elem.age >= 18 && elem.age < 50);
  const peopleSenior = entrants.filter((elem) => elem.age >= 50);
  return {
    child: peopleChild.length,
    adult: peopleAdult.length,
    senior: peopleSenior.length,
  };
}

function calculateEntry(entrants) {
  if (entrants !== undefined && Object.entries(entrants).length !== 0) {
    const peoples = countEntrants(entrants);
    const priceChild = peoples.child * 20.99;
    const priceAdult = peoples.adult * 49.99;
    const priceSenior = peoples.senior * 24.99;
    return priceChild + priceAdult + priceSenior;
  }
  return 0;
}

module.exports = { calculateEntry, countEntrants };
