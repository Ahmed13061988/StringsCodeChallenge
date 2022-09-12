"use strict";

// let button = document.querySelector(".btn");
// let text = "";
// let inputs = [];

// button.addEventListener("click", function () {
//   text = document.querySelector(".textarea").value;
//   inputs = text.split("\n");

//   for (const [i, word] of inputs.entries()) {
//     const [first, second] = word.toLowerCase().trim().split("_");

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
//   }
// });

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const flightsSep = flights.split("+");

for (const word of flightsSep) {
  const [action, from, to, time] = word.trim().split(";");

  const output = `${action.includes("_Delayed") ? "🔴" : " "}${action.replace(
    "_",
    ""
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(":", "h")}) `.padStart(50);

  console.log(output);

  //console.log(newAction, from1, to1, newTime);
}

// console.log(flightsSep);

// for (const departure of flightsSep) {
//   const str = departure
//     .replace("_", " ")
//     .replace("_", " ")
//     .replace(";", " from ")
//     .trim()
//     .replaceAll("fao93766109", "FAO")
//     .replaceAll("txl2133758440", "TXL")
//     .replace(";", " to ")
//     .replace(";", " ")
//     .replace("11:25", "(11h:25)")
//     .replaceAll("bru0943384722", "BRU")
//     .replace("11:45", "(11h:45)")
//     .replace("hel7439299980", "HEL")
//     .replace("12:05", "(12h:05)")
//     .replace("lis2323639855", "LIS")
//     .replace("12:30", "(12h:30)");
//   console.log(str);
// }
