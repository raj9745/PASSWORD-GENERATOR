let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');

// Show input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', () => {
  passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; // cleaned

// Function to generate password
function generatePassword() {
  let genPassword = '';
  let allChars = '';
  allChars += lowercase.checked ? lowerChars : '';
  allChars += uppercase.checked ? upperChars : '';
  allChars += symbols.checked ? allSymbols : '';
  allChars += numbers.checked ? allNumbers : '';

  if (allChars === '' || allChars.length === 0) {
    return genPassword;
  }

//    charAt() method of String values  that returns a new string
//      let name = "ChatGPT";
// console.log(name.charAt(0)); 
  for (let i = 0; i < inputSlider.value; i++) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return genPassword;
}

// Copy password to clipboard
copyIcon.addEventListener('click', () => {
  if (passBox.value !== "" && passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";

    setTimeout(() => {
      copyIcon.innerText = "content_copy";
      copyIcon.title = "";
    }, 3000);
  }
});
