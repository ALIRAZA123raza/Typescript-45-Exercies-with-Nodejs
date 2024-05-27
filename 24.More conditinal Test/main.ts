let apple = "apple";
let uppercaseApple ="APPLE";
let ten = 10;
let twenty = 20;
let fruits =["Apple","Banana","Orange"];

// Test for equality and inequality with string
console.log("apple is equal to apple");
console.log(apple == "apple");

console.log("\napple is not equal to apple ");
console.log(apple != "apple");

// Test using lowercase function
console.log("\nAPPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nAPPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical Tests Equal to
console.log("\n ten is equal to twenty?");
console.log(ten == twenty);

// Not Equal to
console.log("\nten is not equal to twenty");
console.log(ten != twenty);

// Greater than 
console.log("\n ten is greater than zero");
console.log(ten > 0);

// Less than
console.log("\nTwenty is Less than ten");
console.log(twenty < ten);

// Greater than or equal or to
console.log("\nten is greater than or equal to five");
console.log(ten >= 5);

// Less than or equal to
console.log("\ntwenty is less than or equal to ten");
console.log(twenty <= ten);

// Tests using "and" & "or operators"

// using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != ten && twenty > ten);

console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != ten && twenty > 30);

// using || (or)
console.log("\n twenty is greater than 50 OR twenty is equal to 20");
console.log(twenty > 50 || twenty == twenty );

console.log("\n twenty is greater than 50 OR twenty is not equal to 20");
console.log(twenty > 50 || twenty != twenty );

// Tast whether an item is include in array
console.log("\nOrange include in my fruit Array");
console.log(fruits.includes("Orange"));

console.log("\nOrange not include in my fruits Array");
console.log(!fruits.includes("Orange"));
