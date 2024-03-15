//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.
localStorage.setItem('firstName', 'Shreyas');
localStorage.setItem('lastName', 'N');
localStorage.setItem('age', '22');
localStorage.setItem('country', 'India');
localStorage.setItem('state', 'Tamil Nadu');

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.
let firstName = localStorage.getItem('firstName');
let lastName = localStorage.getItem('lastName');
let age = localStorage.getItem('age');
let country = localStorage.getItem('country');
let state = localStorage.getItem('state');

console.log('First Name:', firstName);
console.log('Last Name:', lastName);
console.log('Age:', age);
console.log('Country:', country);
console.log('State:', state);

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.
localStorage.removeItem('state');
console.log(localStorage);

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.
localStorage.clear();
console.log(localStorage);

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

const userString = JSON.stringify(user);
console.log(userString);
