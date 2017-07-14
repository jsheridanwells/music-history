// //create container for filtered songs
let filtered = [];

//select display area for printing playlist
const main = document.getElementById('main');

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

//create elements to hold playlist data on page
function printPlayList(song, artist, album) {
	let listItems = `
		<li>${song}</li>
		<li>${artist}</li>
		<li>${album}</li>
	`;

	let list = document.createElement('ul');
	let header = document.createElement('h3');

	list.innerHTML = listItems;
	header.innerText = `${song}`
	main.appendChild(header);
	main.appendChild(list);
}

//print playlist data to the page
for (i = 0; i < playlist.length; i++) {
	printPlayList(playlist[i].song, playlist[i].artist, playlist[i].album);

}




















