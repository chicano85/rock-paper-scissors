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
}
