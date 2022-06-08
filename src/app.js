/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function nuevaCarta() {
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let palos = ["♠", "♥", "♣", "♦"];

  const random = value => {
    let index = Math.floor(Math.random() * value.length);
    return value[index];
  };
  console.log(random(numbers));
  console.log(random(palos));

  let simbolo = random(palos);

  const NumeroCentral = document.querySelector(".NumeroCentral");
  NumeroCentral.textContent = random(numbers);
  const palo = document.querySelector(".palo");
  palo.textContent = simbolo;
  const palo2 = document.querySelector(".palo2");
  palo2.textContent = simbolo;
};
