let findTheOldest = function (peopleArray) {
  let oldestPerson = peopleArray[0];
  let currPersonAge;
  let oldPersonAge;
  const currYear = new Date();
  for (const person of peopleArray) {
    if (person.hasOwnProperty("yearOfDeath")) {
      currPersonAge = person.yearOfDeath - person.yearOfBirth;
    } else {
      currPersonAge = currYear.getFullYear() - person.yearOfBirth;
    }

    if (oldestPerson.hasOwnProperty("yearOfDeath")) {
      oldPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    } else {
      oldPersonAge = currYear.getFullYear() - oldestPerson.yearOfBirth;
    }

    if (currPersonAge > oldPersonAge) {
      oldestPerson = person;
    }   
  }
  return oldestPerson;
};

const people = [
    {
      name: 'Carly',
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: 'Ray',
      yearOfBirth: 1962,
      yearOfDeath: 2011
    },
    {
      name: 'Jane',
      yearOfBirth: 1912,
      yearOfDeath: 1941
    },
  ];
  findTheOldest(people);

module.exports = findTheOldest;
