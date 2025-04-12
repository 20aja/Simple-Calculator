let result = document.querySelector(".result");


function getID(id) {
  let number = document.getElementById(id).innerHTML;
  number = +number;
  result.innerHTML += +number;
}

let clear = document.querySelector(".clear");

clear.onclick = () => {
  result.innerHTML = "";
  location.reload();
};

let divide = document.querySelector(".divide");
divide.onclick = () => {
    result.innerHTML +=  " / "
};

let multiply = document.querySelector(".multiply");
multiply.onclick = () => {
  result.innerHTML += " * ";
};

let subtract = document.querySelector(".subtract");
subtract.onclick = () => {
  result.innerHTML += " - ";
};

let sum = document.querySelector(".sum");
sum.onclick = () => {
  result.innerHTML += "+";
};

let point = document.querySelector(".point");
point.onclick = () => {
  result.innerHTML += ".";
};

let equal = document.querySelector(".equal");
equal.onclick = () => {
  result.innerHTML = eval(result.innerHTML);
};