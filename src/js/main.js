"use strict";

const btnReset = document.querySelector(".js-reset");

function play(obj) {
  let machine;
  let res;

  let objects = ["piedra", "papel", "tijera"];
  machine = Math.floor(Math.random() * 3);

  let movHuman = objects[obj];
  let movMachine = objects[machine];

  document.getElementById("human").innerHTML = objects[obj];
  document.getElementById("machine").innerHTML = objects[machine];

  if (movMachine === "piedra" && movHuman === "piedra") {
    res = "¡Empate!";
    document.getElementById("result").innerHTML = res;
  }

  if (movMachine === "piedra" && movHuman === "papel") {
    res = "¡Ganas! El papel le gana a la piedra";
    document.getElementById("result").innerHTML = res;
  }

  if (movMachine === "piedra" && movHuman === "tijera") {
    res = "¡Pierdes! La piedra le gana a las tijeras";
    document.getElementById("result").innerHTML = res;
  }
  if (movMachine === "papel" && movHuman === "piedra") {
    res = "¡Pierdes! El papel gana a la piedra";
    document.getElementById("result").innerHTML = res;
  }
  if (movMachine === "papel" && movHuman === "papel") {
    res = "¡Empate!";
    document.getElementById("result").innerHTML = res;
  }
  if (movMachine === "papel" && movHuman === "tijera") {
    res = "¡Ganas! Las tijeras ganan a papel";
    document.getElementById("result").innerHTML = res;
  }
  if (movMachine === "tijera" && movHuman === "tijera") {
    res = "¡Empate!";
    document.getElementById("result").innerHTML = res;
  }
  if (movMachine === "tijera" && movHuman === "piedra") {
    res = "¡Ganas! La piedra gana a las tijeras";
    document.getElementById("result").innerHTML = res;
  }
  if (movMachine === "tijera" && movHuman === "papel") {
    res = "¡Pierdes! Las tijeras ganan al papel";
    document.getElementById("result").innerHTML = res;
  }
}

function reset() {
  location.reload();
}

btnReset.addEventListener("click", reset);
