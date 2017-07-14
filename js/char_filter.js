// //create container for filtered songs
let filtered = [];

//create a regex of characters to filter
const charsToFilter = /\(|@|!|\*|/g;

// loop through each item in songs array
for (let i = 0; i < songs.length; i++) {
	filtered[i] = songs[i].replace(charsToFilter, '');  //replace characters with '', add to filtered container
}

//construct playlist array
let playlist = [];

let makePlaylistEntry = function(song, artist, album ) {
	this.song = song,
	this.artist = artist,
	this.album = album
}

//populate playlist array with data from songs > filtered
for (let i = 0; i < filtered.length; i++) {
	playlist.push(
		new makePlaylistEntry(
			filtered[i].slice(0, filtered[i].indexOf('>') - 1),
			filtered[i].slice(filtered[i].indexOf('by') + 3, filtered[i].lastIndexOf('on') - 1),
			filtered[i].slice(filtered[i].indexOf('album') + 6,  filtered[i].length)
			)
		);
}

function printPlaylist() {
	
}