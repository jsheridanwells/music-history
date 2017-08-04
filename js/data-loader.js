var Music = (function(obj){
	let _songData = [];

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
			main.appendChild(entry);
		}
	};
	window.addEventListener('load', function() {
		console.log("load working");
		Music.loadSongData(Music.showSongs, 'js/songs1.json');
	});

	return obj;
}(Music || obj));
