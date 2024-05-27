"use strict";
function make_album(artist_name, album_tital, tracks) {
    let album = {
        artist: artist_name,
        tital: album_tital,
    };
    3;
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Ali ", "Album tital 1");
let album2 = make_album("AQib", "Album tital 2");
let album3 = make_album("Rabi", "Album tital 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
