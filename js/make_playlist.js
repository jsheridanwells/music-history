let main = document.getElementById('main');
let songField = document.getElementById('song-field');
let artistField = document.getElementById('artist-field');
let albumField = document.getElementById('album-field');
let addButton = document.getElementById('add-music-button');
let playlist = [];
let count = 0;

function addToPlaylist(song, artist, album) {
	this.song = song;
	this.artist = artist;
	this.album = album;
}

let addEntry = () => {
	playlist[0] = new addToPlaylist(songField.value, artistField.value, albumField.value);
	count++;
};

let showPlaylist = () => {
	let entry = document.createElement('div');
	let entryText = `
	  <h3>${playlist[0].song}</h3>
		<ul>
			<li>${playlist[0].song}</li>
			<li>${playlist[0].artist}</li>
			<li>${playlist[0].album}</li>
		</ul>
	`;
	entry.innerHTML = entryText;
	main.appendChild(entry);

}

let resetForm = () => {
	songField.value = '';
	artistField.value = '';
	albumField.value = '';
}

addButton.addEventListener('click', ()=> {
	addEntry();
	showPlaylist();
	showList();
	resetForm();
});

document.addEventListener('keyup', (e)=>{
	if (e.which === 13) {
		addEntry();
		showPlaylist();
		showList();
		resetForm();
	}
});



// STATUS:  how do I set up enter key so that it only works when 
// 'addmusic ' is shown????

