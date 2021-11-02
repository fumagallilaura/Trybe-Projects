const data = require('../data/zoo_data');

const arrayAnimals = data.species.map(({ name }) => name);
const arrayDaysWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday',
  'Saturday', 'Sunday', 'Monday'];

const getAnimalsByDay = (dayWeek) => {
  const daysExhibition = data.species.filter((specie) => specie.availability.includes(dayWeek));
  return daysExhibition.map((specieInDay) => specieInDay.name);
};

const noParamet = () => {
  const objEveryDays = {};
  const officeHour = 'officeHour';
  const exhibition = 'exhibition';
  arrayDaysWeek.forEach((dayWeek) => {
    if (dayWeek !== 'Monday') {
      objEveryDays[`${dayWeek}`] = {
        [officeHour]: `Open from ${data
          .hours[`${dayWeek}`].open}am until ${data.hours[`${dayWeek}`].close}pm`,
        [exhibition]: getAnimalsByDay(dayWeek),
      };
    } else {
      objEveryDays[`${dayWeek}`] = {
        [officeHour]: 'CLOSED',
        [exhibition]: 'The zoo will be closed!',
      };
    }
  });
  return objEveryDays;
};
// getSchedule('diaDaSemana') => return "horários para aquele dia e quais animais estarão disponíveis"
// 'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' }
const daysWithHoursAndAnimals = (dayWeekTarget) => {
  const objEveryDays = {};
  const officeHour = 'officeHour';
  const exhibition = 'exhibition';
  arrayDaysWeek.forEach((dayWeek) => {
    if (dayWeekTarget === dayWeek && dayWeek !== 'Monday') {
      objEveryDays[`${dayWeek}`] = {
        [officeHour]: `Open from ${data.hours[`${dayWeek}`].open}am until ${data
          .hours[`${dayWeek}`].close}pm`,
        [exhibition]: getAnimalsByDay(dayWeek),
      };
    } else if (dayWeekTarget === dayWeek) {
      objEveryDays[`${dayWeek}`] = {
        [officeHour]: 'CLOSED',
        [exhibition]: 'The zoo will be closed!',
      };
    }
  });
  return objEveryDays;
};

// Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.

const daysOfTheAnimal = (animalTarget) => {
  const objSpecieTarget = data.species.find((specie) => specie.name === animalTarget);
  return objSpecieTarget.availability;
};

// A função é responsável por disponibilizar as informações de horário dos animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.

function getSchedule(scheduleTarget) {
  if (arrayAnimals.includes(scheduleTarget)) return daysOfTheAnimal(scheduleTarget);
  if (arrayDaysWeek.includes(scheduleTarget)) return daysWithHoursAndAnimals(scheduleTarget);
  return noParamet();
}

module.exports = getSchedule;
