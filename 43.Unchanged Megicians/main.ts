function show_megicians(megicians: string[]){
    megicians.forEach(name => console.log(name));
}

function make_great(megicians: string[]){
  return megicians.map(name => `The Great ${name}`)
}

let megicians_names =["Harry poter", "Sir Bilal", "Sir Ubaid"]

let copy_megicians_name = megicians_names.slice()

let copy_great_megicians=make_great(copy_megicians_name)

console.log("Original Array\n")
show_megicians(megicians_names)

console.log("\nCopied Array\n")
show_megicians(copy_great_megicians)