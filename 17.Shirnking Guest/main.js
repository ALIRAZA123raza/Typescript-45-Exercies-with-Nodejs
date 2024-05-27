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
// Inform that only two guest can be invited for dinner
console.log("unfortunataly , the new dinner table wont arrive on time, so can only invite two guests to dinner wiyh me");
// use while loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`sorry, ${removeGuest} I cant invite you to dinner`);
}
//sending a invitation to the last two guest on the list
console.log("invitation to the last 2 guests");
guestList.forEach(lastTwo => console.log(`luckly ${lastTwo} you are still invited to dinner`));
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list", guestList);
