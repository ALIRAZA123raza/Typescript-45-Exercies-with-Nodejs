"use strict";
let alienColor = "Green";
// version 1
if (alienColor === "Green") {
    console.log("(version 1) you shoot down Green alien you have earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("you shoot down yellow alien you have earned 10 points");
}
else if (alienColor === "red") {
    console.log("you shoot down red alien you have earned 15 points");
}
// version 2
let alienColor2 = "yellow";
if (alienColor2 === "Green") {
    console.log("you shoot down Green alien you have earen 5 points. ");
}
else if (alienColor2 === "yellow") {
    console.log("(version 2) you shoot down yellow alien you have earen 10 points.");
}
else if (alienColor2 === "red") {
    console.log("you shoot down red alien you have earen 15 points.");
}
// version 3
let alienColor3 = "red";
if (alienColor3 === "Green") {
    console.log("you shoot down Green alien you have earen 5 points.");
}
else if (alienColor3 === "yellow") {
    console.log("you shoot down yellow alien you have earen 10 points.");
}
else if (alienColor3 === "red") {
    console.log("(version 3) you shoot down red alien you have earen 15 points.");
}
