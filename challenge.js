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

console.log(flightsSep);

for (const word of flightsSep) {
  const [action, from, to, time] = word.trim().split(";");

  const output = `${
    action.includes("Delayed")
      ? action.padStart(1, "🔴").replaceAll("_", " ")
      : action.padStart(20, ".........").replaceAll("_", "")
  }  ${from
    .replace("fao93766109", "from FAO")
    .replace("hel7439299980", "from HEL")
    .replace("bru0943384722", "from BRU")} ${to
    .replaceAll("txl2133758440", " to TXL")
    .replace("fao93766109", "to FAO")
    .replace("lis2323639855", "to LIS")} (${time.replace(":", "h")}) `;

  console.log(output);

  const from1 = from
    .replace("fao93766109", "from FAO")
    .replace("hel7439299980", "from HEL")
    .replace("bru0943384722", "from BRU");

  const to1 = to
    .replaceAll("txl2133758440", " to TXL")
    .replace("fao93766109", "to FAO")
    .replace("lis2323639855", "to LIS");

  const newTime = time
    .replace("11:25", "11h25")
    .replace("11:45", "11h45")
    .replace("12:05", "12h05")
    .replace("12:30", "12h30");

  const newAction = action.replace("_", ".....");
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
