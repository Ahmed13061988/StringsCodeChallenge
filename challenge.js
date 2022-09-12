"use strict";

let button = document.querySelector(".btn");
let text = "";
let inputs = [];

button.addEventListener("click", function () {
  text = document.querySelector(".textarea").value;
  inputs = text.split("\n");

  for (const word of inputs) {
    console.log(word.replace("\n", " ").replace("_", ""));
  }
});
