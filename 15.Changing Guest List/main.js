"use strict";
let guestList = ["Aqib", "Rabi", "Haseeb"];
let dontCome = guestList[2];
console.log(dontCome, "dont come to dinner");
guestList.splice(2, 2, "mukesh");
guestList.forEach(guest => console.log(`salam ${guest}, would like to dinner with me?`));
