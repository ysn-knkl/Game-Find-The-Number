const randomNum = Math.floor(Math.random() * 100);
console.log("randomNum :>> ", randomNum);

const inputNum = document.getElementById("input-num");
const attemptNum = document.getElementById("attempt-number");
const checkBtn = document.getElementById("check-button");
const attemptInfo = document.getElementById("attempt-info");
const knowledge = document.getElementById("knowledge");
const resetBtn = document.getElementById("reset-button");

let counter = 0;

checkBtn.addEventListener("click", guesNumber);
resetBtn.addEventListener("click",()=> location.reload());

function guesNumber() {
  let gNum = parseInt(inputNum.value, 10);
  console.log("inputNum :>> ", parseInt(inputNum.value, 10));
  counter++;
  attemptNum.innerHTML = `${counter}`;

  if (100 > gNum && gNum > 0) {
    attemptInfo.innerHTML = `Your number is ${gNum}`;
    if (gNum === randomNum) {
      knowledge.innerHTML = "C O N G R A T U L A T İ O N S";
      inputNum.style.backgroundColor = "rgb(51, 235, 66)";
      inputNum.setAttribute("type","text")
      inputNum.value = `---${gNum}---`;
      changeInput();
      
    } else if (gNum < randomNum) {
      knowledge.innerHTML = "Try to Higher Number";
      inputNum.style.backgroundColor = "rgb(233, 74, 108)";

      clearAndFocus();
    } else {
      knowledge.innerHTML = "Try to Lower Number";
      inputNum.style.backgroundColor = "rgb(34, 193, 221)";
      clearAndFocus();
    }
  } else {
    inputNum.value = "";
    knowledge.innerHTML = "Be Caution... Number within 1-100";
}
}


function clearAndFocus () {
    inputNum.value = "";
      inputNum.focus();
}

function changeInput () {
    inputNum.setAttribute("type","image");
    inputNum.setAttribute("src","http://i.stack.imgur.com/SBv4T.gif");
    inputNum.setAttribute("width","250px");


}
