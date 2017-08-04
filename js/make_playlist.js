var Music = (function(){

	let main = document.getElementById('main');
	let songField = document.getElementById('song-field');
	let artistField = document.getElementById('artist-field');
	let albumField = document.getElementById('album-field');
	let addButton = document.getElementById('add-music-button');
	let add = document.getElementById('add-music-view');
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


	let resetForm = () => {
		songField.value = '';
		artistField.value = '';
		albumField.value = '';
	}

	let	showPlaylist = (song, artist, album) => {
		let mainRow = document.getElementById('main-row');
		let entry = document.createElement('div');
		let entryText = `
		  <h3>${song}</h3>
			<ul>
				<li>${song}</li>
				<li>${artist}</li>
				<li>${album}</li>
			</ul>
		`;
		entry.innerHTML = entryText;
		main.insertBefore(entry, mainRow);
	}


	addButton.addEventListener('click', ()=> {
		console.log("clicking", );
		addEntry();
		showPlaylist(playlist[0].song, playlist[0].artist, playlist[0].album);
		Music.showList();
		resetForm();
	});

	add.addEventListener('keyup', (e)=>{
		if (e.which === 13) {
			addEntry();
			showPlaylist(playlist[0].song, playlist[0].artist, playlist[0].album);
			Music.showList();
			resetForm();
		}
	});
	return {
		getMain: () => {
			return main;
		}
	}
}());

