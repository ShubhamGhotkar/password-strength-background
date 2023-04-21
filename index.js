const submitBtn = document.querySelector(".form--btn");
const backContainer = document.querySelector(".container");

const passInput = document.querySelector(".password--input");

passInput.addEventListener("input", (event) => {
  let inputString = event.target.value;
  //   calculate length of password
  let passLength = inputString.length;

  //   adjust blur & checking value if length >7
  let blurValue = 14 - passLength * 2 < 0 ? 0 : 14 - passLength * 2;
  backContainer.style.filter = `blur(${blurValue}px)`;
});

//  FOR VALIDATION

// let blurValue = 14;
// function checkInputForPassword(str) {
//   let set = new Set([str.slice()]);
//   // check length
//   (function () {
//     blurValue = str.length >= 7 ? blurValue - 2 : blurValue;
//   })();

//   // check special character
//   (function () {
//     if (set.has("@") || set.has("$") || set.has("#") || set.has("*")) {
//       blurValue -= 2;
//     }
//   })();

//   // uppercase character

//   let isCapitalLettel = function (str) {
//     return /[A-Z]/.test(str);
//   };

//   blurValue = isCapitalLettel(str) ? (blurValue -= 2) : blurValue;
//   // lowercase character

//   // check number

//   console.log(blurValue);
// }
