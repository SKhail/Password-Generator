// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function generatePassword() {

  //Prompt for password length
  let passwordLength = parseInt(prompt('Enter password length - between 8 and 128 characters - :'));
  //check for condition met 
  if (passwordLength < 8 || passwordLength > 128) {
    ///Output an error message
    console.log(" You need your password to be atleast 8 charcters and less than 128 ");
    return passwordLength;
  }

  // combining all the characters
  const combineChar = specialCharacters.concat(numericCharacters, upperCasedCharacters, lowerCasedCharacters);


  // I need to create confirmations with each character 

  let password = '';
  for (let i = 0; i < passwordLength.length; i++) {
    // Join together to enable the randomise happen with all characters
    let randomChar = getRandom(combineChar);
    password += randomChar;

  }

  return password;

}

// Function so i can call it when it is needed
function getRandom(arr) {
  const randomize = Math.floor(Math.random() * arr.length);
  // arr[randomize];
  return arr[randomize];
}

generatePassword();

// let generatedPassword = generatePassword();
// console.log(generatePassword);







// Function to prompt user for password options
function getPasswordOptions() {



}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);