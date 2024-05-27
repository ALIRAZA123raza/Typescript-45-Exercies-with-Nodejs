"use strict";
function creat_car(manufacturer, model, ...extraOptions) {
    const carInfo = Object.assign({ manufacturer,
        model }, Object.assign({}, ...extraOptions));
    return carInfo;
}
;
let answer = creat_car("Toyota", "Corolla", { color: "silver" }, { features: ["Navigation", "Power window"] });
console.log(answer);
