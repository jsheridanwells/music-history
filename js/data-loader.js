'use strict';
let _songs = [];


let Music = {
	//loads all music from the database when given an url
	loadSongs: function(url) {
		return new Promise((resolve, reject)=>{
			$.ajax({
				url: url
			})
			.done((data)=>{
				resolve(data);
				data.forEach((item)=>{
					_songs.push(item);
				});
			}).fail((xhr, status, error) => {
				reject(error);
			});
		});
	},
	//sends songs data
	getSongs: function() {
		console.log("_songs", _songs);
		return _songs;
	},
	//adds song to _songs array
	addSong: function(obj) {
		_songs.push(obj);
	}
};

module.exports = Music;