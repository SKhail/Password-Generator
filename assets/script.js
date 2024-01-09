
// Array of special characters to be included in password
const specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
const upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// toggle feature for dark/light mode
var toggle = document.getElementById('toggle')
var body = document.body;

//targeting when a person clicks the checkbox or toggles 
toggle.addEventListener('input', e => {
  var isChecked = e.target.checked;

  if (isChecked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }

});

function generatePassword() {
  
  var allChars = '';
  var generatePassword = '';

  //for the user to confirm they need before the password is generated
  var includeLowercase = confirm("You will need a minimum of 1 Lowercase, please press Ok to confirm");
  var includeUppercase = confirm("You will need a minimum of 1 Uppercase, please press Ok to confirm");
  var includeNumbers = confirm("You will need a minimum of 1 Number, please press Ok to confirm");
  var includeSpecial = confirm("You will need a minimum of 1 Special character, please press Ok to confirm");


  var passwordLength = parseInt(prompt('Please enter password length between 8 and 128 characters :'));

  // The user has to be under 8 and not over 128 characters for the password
  if (passwordLength < 8 || passwordLength > 128) {
    return alert("Your password must be between 8 and 128 characters.");

  }

  //If this doesn't include rscha
  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecial)) {
    return alert("You must choose at least one password for each section");

  }

  // This will be Concatenating each type of character
  if (includeLowercase) {
    allChars += lowerCasedCharacters.join(''); 
    
  }
  if (includeUppercase) {
    allChars += upperCasedCharacters.join(''); 
  }
  if (includeNumbers) {
    allChars += numericCharacters.join(''); 
  }
  if (includeSpecial) {
    allChars += specialCharacters.join('');
  }

  for (var i = 0; i < passwordLength; i++) {
    const randomChar = getRandom(allChars);
    generatePassword += randomChar; //storing the chars in the variable generatePassword
  }

  return generatePassword;
}

function getRandom(arr) {
  const randomize = Math.floor(Math.random() * arr.length);
  return arr[randomize];
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








//   // User requires to enter at least 1 of each character
//   const includeLowercase = window.prompt('Please include at least 1 lowercase');


//   const includeUppercase = window.prompt('Please include at least 1 uppercase');
//   const includeNumbers = window.prompt('Please include at least 1 number');
//   const includeSymbols = window.prompt('Please include at least 1 symbol');

//   

// let allChars = '';

  

//   let password = '';
//   for (let i = 0; i < length; i++) {
//     password += getRandom(allChars);
//   }

//   return password;
// }



//   // let password = '';
//   let passwordLength = parseInt(prompt('Enter password length - between 8 and 128 characters - :'));



//   let specialChar = false;
//   let numericChar = false;
//   let lowercaseChar = false;
//   let uppercaseChar = false;

//   if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
//     alert("You need your password to be at least 8 characters and less than 128.");
//     return '';
//   }

//   for (let attempts = 0; attempts < 50; attempts++) {
//     password = '';

//     for (let i = 0; i < passwordLength; i++) {
//       let randomChar = getRandom(allCharacters);
//       password += randomChar;

//       if (specialCharacters.includes(randomChar)) {
//         specialChar = true;
//       } else if (numericCharacters.includes(randomChar)) {
//         numericChar = true;
//       } else if (lowerCasedCharacters.includes(randomChar)) {
//         lowercaseChar = true;
//       } else if (upperCasedCharacters.includes(randomChar)) {
//         uppercaseChar = true;
//       }
//     }

//     if (specialChar && numericChar && lowercaseChar && uppercaseChar) {
//       alert("Generated Password: " + password);
//       return password;
//     }
//   }

//   alert('Failed to generate a password. Please try again.');
//   return password;
// }

// function getRandom(arr) {
//   const randomize = Math.floor(Math.random() * arr.length);
//   return arr[randomize];
// }









