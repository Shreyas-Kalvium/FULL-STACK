// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
let driverName = 'Kalvian-1';
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${driverName}`);
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
let navigatorName = 'Kalvian-2';
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${navigatorName}`);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (driverName.length > navigatorName.length) {
  console.log(
    `The driver has the longest name, it has ${driverName.length} characters.`
  );
} else if (navigatorName.length > driverName.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${driverName.length} characters!`
  );
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.
let vowels = '';
let vowelsIndex = '';
let vowelsCount = 0;

for (let i = 0; i < driverName.length; i++) {
  let letter = driverName[i].toLowerCase();
  if (
    letter === 'a' ||
    letter === 'e' ||
    letter === 'i' ||
    letter === 'o' ||
    letter === 'u'
  ) {
    vowels = vowels + driverName[i] + ' ';
    vowelsIndex = vowelsIndex + i + ' ';
    vowelsCount++;
  }
}

if (vowelsCount > 0) {
  console.log(`${driverName} ${vowels}${vowelsIndex}`);
} else {
  console.log('no vowels');
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
let upperCaseCount = 0;
let lowerCaseCount = 0;

for (let i = 0; i < driverName.length; i++) {
  if (driverName[i] === driverName[i].toUpperCase()) {
    upperCaseCount++;
  } else if (driverName[i] === driverName[i].toLowerCase()) {
    lowerCaseCount++;
  }
}

console.log(`Upper case characters: ${upperCaseCount}`);
console.log(`Lower case characters: ${lowerCaseCount}`);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
let driverUpperC = '';
for (let i = 0; i < driverName.length; i++) {
  driverUpperC += driverName[i].toUpperCase() + ' ';
}
console.log(driverUpperC);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
let navigatorReverse = '';
for (let i = navigatorName.length - 1; i >= 0; i--) {
  navigatorReverse += navigatorName[i];
}
console.log(navigatorReverse);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
let mergedNames = driverName + ' ' + navigatorName;
console.log(mergedNames);
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
let reversedNames = navigatorName + ' ' + driverName;
console.log(reversedNames);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (driverName < navigatorName) {
  console.log("The driver's name goes first.");
} else if (driverName > navigatorName) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at urna condimentum mattis pellentesque. In arcu cursus euismod quis viverra nibh cras. Amet nulla facilisi morbi tempus. Blandit massa enim nec dui nunc. Blandit volutpat maecenas volutpat blandit. Amet commodo nulla facilisi nullam vehicula ipsum. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Nibh cras pulvinar mattis nunc. Tellus molestie nunc non blandit massa enim nec dui. Adipiscing bibendum est ultricies integer.

Eget nullam non nisi est sit amet facilisis. Aliquam etiam erat velit scelerisque in dictum non. Turpis egestas integer eget aliquet nibh. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ac auctor augue mauris augue neque gravida in fermentum. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. At imperdiet dui accumsan sit amet nulla facilisi. Diam quis enim lobortis scelerisque. Et netus et malesuada fames ac. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Ut tristique et egestas quis ipsum suspendisse ultrices. Erat nam at lectus urna duis convallis convallis tellus id. Mi bibendum neque egestas congue quisque egestas diam in arcu. Volutpat blandit aliquam etiam erat velit scelerisque. Amet mauris commodo quis imperdiet massa.

Nibh venenatis cras sed felis eget velit. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sit amet consectetur adipiscing elit. Viverra ipsum nunc aliquet bibendum enim. Tristique et egestas quis ipsum suspendisse ultrices. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Adipiscing elit ut aliquam purus sit. A pellentesque sit amet porttitor eget dolor. Et tortor at risus viverra adipiscing at in tellus.`;

let wordCount = 0;
let inWord = false;

for (let i = 0; i < loremIpsum.length; i++) {
  if (
    loremIpsum[i] !== ' ' &&
    loremIpsum[i] !== '\n' &&
    loremIpsum[i] !== '\t'
  ) {
    if (!inWord) {
      inWord = true;
      wordCount++;
    }
  } else {
    inWord = false;
  }
}
console.log('Number of words:', wordCount);

let wordToCount = 'et';
let stringCount = 0;
let currentWord = '';

for (let i = 0; i < loremIpsum.length; i++) {
  if (
    loremIpsum[i] !== ' ' &&
    loremIpsum[i] !== '\n' &&
    loremIpsum[i] !== '\t'
  ) {
    currentWord += loremIpsum[i];
  } else {
    if (currentWord.toLowerCase() === wordToCount) {
      stringCount++;
    }
    currentWord = '';
  }
}

console.log(`Number of times '${wordToCount}' :`, stringCount);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
