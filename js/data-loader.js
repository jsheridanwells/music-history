'use strict';
let _songs = [];


let Music = {
	//load all music from the database when given an url
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
	//send songs data
	getSongs: function() {
		return _songs;
	}
};

module.exports = Music;