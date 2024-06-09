let inputElement = document.getElementById("text-input-field");
let remainingCharsElement = document.getElementById("remaining-chars");
let maxChars = inputElement.maxLength;

function caculateRemainingChars(event) {
  let textInput = event.target.value;
  let textInputLength = textInput.length;
  let remainginCharsLength = maxChars - textInputLength;
  remainingCharsElement.textContent = remainginCharsLength;
  let warningStart = 10;
  if(remainginCharsLength < warningStart){
    inputElement.classList.add('warning');
    remainingCharsElement.classList.add('warning');
  }
  else {
    inputElement.classList.remove('warning');
    remainingCharsElement.classList.remove('warning');
  }
  
}

inputElement.addEventListener("input", caculateRemainingChars);

