const submitBtn = document.querySelector(".form--btn");
const backContainer = document.querySelector(".container");

const passInput = document.querySelector(".password--input");

let validateArray = [
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
];

passInput.addEventListener("input", (event) => {
  let defaultBlur = 15;
  let inputString = event.target.value;

  let backBlurValue = checkInputForPassword(inputString);

  backContainer.style.filter = `blur(${defaultBlur - backBlurValue}px)`;
});

//  FOR VALIDATION
function checkInputForPassword(str) {
  let blurValue = 0;

  // check length
  if (str.length >= 7 && str.length <= 20) blurValue += 3;

  // check special character

  let isSpecialChar = function (str) {
    let strArray = [...str];
    let check = strArray.some((itm) => validateArray.includes(itm));
    return check;
  };

  if (isSpecialChar(str)) blurValue += 3;

  // uppercase character
  if (validation(str, /[A-Z]/)) blurValue += 3;

  // lowercase character
  if (validation(str, /[a-z]/)) blurValue += 3;

  // check number
  if (validation(str, /[0-9]/)) blurValue += 3;

  console.log(blurValue);
  return blurValue;
}

function validation(str, validate) {
  return validate.test(str);
}
