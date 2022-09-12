"use strict";

let button = document.querySelector(".btn");
let text = "";
let inputs = [];

button.addEventListener("click", function () {
  text = document.querySelector(".textarea").value;
  inputs = text.split("\n");

  for (const [i, word] of inputs.entries()) {
    const [first, second] = word.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }

  //   for (let i = 0; i < inputs.length; i++) {
  //     let word =
  //       inputs[i]
  //         .toLowerCase()
  //         .replace("\n", " ")
  //         .trim()
  //         .replace("_", inputs[i]) + " ✅".repeat(`${i + 1} `);
  //     console.log(word);
  //   }
});
