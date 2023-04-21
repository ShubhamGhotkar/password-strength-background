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
  let inputStringArray = [...str];

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

  let isCapitalLettel = function (str) {
    return /[A-Z]/.test(str);
  };
  if (isCapitalLettel(str)) blurValue += 3;

  // lowercase character

  let isSmallLettel = function (str) {
    return /[a-z]/.test(str);
  };
  if (isSmallLettel(str)) blurValue += 3;

  // check number
  let isNumber = function (str) {
    return /[0-9]/.test(str);
  };

  if (isNumber(str)) blurValue += 3;

  return blurValue;
}
