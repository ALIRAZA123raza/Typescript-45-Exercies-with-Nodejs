function show_megicians(megicians: string[]){
    megicians.forEach(name => console.log(name));
}

function make_great(megicians: string[]){
  return megicians.map(name => `The Great ${name}`)
}

let megicians_names =["Harry poter", "Sir Bilal", "Sir Ubaid"]

let great_megicians= make_great(megicians_names)

show_megicians(great_megicians)