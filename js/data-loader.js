var Music = (function(obj){
	let _songData = [];
	let more = document.getElementById('more');

	obj.loadSongData = (callback, url) => {
		let xhr = new XMLHttpRequest();
		xhr.addEventListener('load', function() {
			_songData = JSON.parse(xhr.responseText);
			callback(_songData);
		});
		xhr.open('GET', url);
		xhr.send();
	};

	obj.showSongs = (data) => {
		for (let i = 0; i < data.length; i++) {
			let main = Music.getMain();
			let mainRow = document.getElementById('main-row');
			let entry = document.createElement('div');
			let entryText = `
			  <h3>${data[i].song}</h3>
				<ul>
					<li>${data[i].song}</li>
					<li>${data[i].artist}</li>
					<li>${data[i].album}</li>
				</ul>
			  `;
			entry.innerHTML = entryText;
			main.insertBefore(entry, mainRow);
		}
	};

	window.addEventListener('load', function() {
		
		Music.loadSongData(Music.showSongs, 'js/songs1.json');
	});
	more.addEventListener('click', function() {
		console.log("more working");
		Music.loadSongData(Music.showSongs, 'js/songs2.json');
	});

	return obj;
}(Music || obj));
