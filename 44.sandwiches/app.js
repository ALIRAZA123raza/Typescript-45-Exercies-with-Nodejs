"use strict";
function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:\n");
    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("\nNow enjoy sandwich\n");
}
make_sandwich("chicken", "cheese", "mayo", "egg");
make_sandwich("bread", "butter");
make_sandwich("bread", "butter", "mayo", "egg", "chicken", 'kabaab');
