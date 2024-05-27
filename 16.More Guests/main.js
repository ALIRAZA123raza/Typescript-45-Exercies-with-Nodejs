"use strict";
// creating a guest list Array
let guestList = ["Aqib", "Rabi", "Haseeb"];
// making variable for those guest who cant come
let dontCome = guestList[2];
// print the name of guest who cant come
console.log(dontCome, "dont come to dinner");
// Add or Remove values from guest list Array
guestList.splice(2, 2, "mukesh");
// Message print for bigger table 
console.log("Good News ! we have found a bigger table for dinner");
// Adding a new guest at starting index of Array
guestList.unshift("mamo");
// Adding a new guest at ending index of Array
guestList.push("Arsalan");
// Get a middle index of our guest list Array
let middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "imran");
//print message for updated list
console.log("Updated List of our Guests");
// sending a invitation message to our guest one by one with thier names
guestList.forEach(oneGuest => console.log(`salam ${oneGuest}, would you like to dinner with me?`));
