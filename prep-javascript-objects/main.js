const person = {
  firstName: 'Jaden',
  lastName: 'Bertino',
  hobby: 'Surfing'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Frontend Developer';
person.previousJob = 'Soccer Player';
console.log(person.job);
console.log(person);
