let countriesToVisit: string[]= ["China","Denmark","Brazil","Argentina"];
console.log("Original Order",countriesToVisit);

console.log("Alphabetical Order", [...countriesToVisit].sort());

console.log("still in original order", countriesToVisit);

console.log("Reverse order:", [...countriesToVisit].reverse());

console.log("still in original order", countriesToVisit);

console.log("original Array reversed;", countriesToVisit.reverse());

console.log("back to original order ;", countriesToVisit.reverse());

console.log("sorted in Alphabetical order:", countriesToVisit.sort());

console.log("original Array reversed Again;", countriesToVisit.reverse());