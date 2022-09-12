"use strict";

let button = document.querySelector(".btn");
let text = "";
let inputs = [];

button.addEventListener("click", function () {
  text = document.querySelector(".textarea").value;
  inputs = text.split(" ");

  for (const x of inputs) {
    console.log(x.replace("_", "").trim());
  }
});
