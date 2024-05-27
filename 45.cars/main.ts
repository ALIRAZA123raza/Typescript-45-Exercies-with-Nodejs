function creat_car(manufacturer:string, model:string, ...extraOptions:{[key : string]: any}[]): object{
    const carInfo ={
        manufacturer,
        model,
        ...Object.assign({}, ...extraOptions)
    }

    return carInfo;
};

let answer= creat_car("Toyota", "Corolla", {color:"silver"}, {features:["Navigation", "Power window"]})
    
console.log(answer)